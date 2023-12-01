import { Router, Status } from '../../deps.ts'
import { db } from '../../main.ts'
import { checkEmailFormat } from '../../mailer/emailFormat.ts'
import { passwordResetEmail } from '../../mailer/passwordResetEmail.ts'
import { UserInterface } from '../../database/interfaces.ts'

export const forgotPasswordEmailSender = new Router()
forgotPasswordEmailSender.post(`/api/${Deno.env.get('API_VERSION')}/forgot-password`, async (ctx) => {

    const body  = await ctx.request.body().value

    if(!body.email || !checkEmailFormat(body.email)){
        ctx.response.status = Status.BadRequest
        return ctx.response.body = {
            ErrMsg: 'Provide a valid email'
        }
    }

    await db.queryObject<UserInterface>(`SELECT email, hash FROM users WHERE email->>'value'=$1`, [body.email]).then(async res => {
        if(res.rows.length <= 0){
            ctx.response.status = Status.BadRequest
            return ctx.response.body = {
                ErrMsg: 'An error occurred, please retry later'
            }
        }

        await passwordResetEmail(
            String(Deno.env.get('EMAIL_AUTH_USER')),
            body.email,
            res.rows[0].hash,
            String(Deno.env.get('PLATFORM_NAME')),
            String(Deno.env.get('PLATFORM_HOST'))
        ).then(_ => {
            ctx.response.status = Status.OK
            return ctx.response.body = {
                SuccMsg: 'Follow the link on your email to continue'
            }
        }).catch(_ => {
            ctx.response.status = Status.BadGateway
            return ctx.response.body = {
                ErrMsg: 'An error occurred, please retry later'
            }
        })

    }).catch(_ => {
        ctx.response.status = Status.BadGateway
        return ctx.response.body = {
            ErrMsg: 'An error occurred, please retry later'
        }
    })
})