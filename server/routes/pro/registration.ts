import { Router, checkPassword } from '../../deps.ts'
import { db } from '../../main.ts'
import { verificationEmail } from '../../mailer/verificationEmail.ts'
import { checkEmailFormat } from '../../mailer/emailFormat.ts'
import { bcryptHashing } from '../../auth/passwordHashing.ts'
import { Status } from 'https://deno.land/std@0.200.0/http/http_status.ts'

export const proRegistration = new Router()
proRegistration.post(`/api/${Deno.env.get('API_VERSION')}/designer/registration`, async (ctx) => {

    const body  = await ctx.request.body().value
    const new_hash = crypto.randomUUID()
    const hashed_pass = await bcryptHashing(body.password)
    const new_id = crypto.randomUUID()

    if(!body.password || !body.email){
        ctx.response.status = Status.BadRequest
        return ctx.response.body = {
            ErrMsg: 'Provide the required credentials'
        }
    }

    const passwordValid = checkPassword({
        password: body.password,
        minLen: 8,
        containsNum: true,
        containsAlphabet: true,
        containsSpecialChar: true,
    })

    if(!passwordValid){
        ctx.response.status = Status.BadRequest
        return ctx.response.body = {
            type: 'Provide a stronger password'
        }
    }
    
    if(!checkEmailFormat(body.email)){
        ctx.response.status = Status.BadRequest
        return ctx.response.body = {
            type: 'Provide a valid email'
        }
    }

    await db.queryArray(`SELECT EXISTS (SELECT * FROM users WHERE email->>'value'=$1);`, [body.email]).then(async res => {
        if(res.rows[0][0]){
            ctx.response.status = Status.BadRequest
            return ctx.response.body = {
                account: {
                    exists: true,
                }
            }
        }

        await db.queryArray(`INSERT INTO users(id, hash, active, role, email, password) VALUES ($1, $2, $3, $4, $5, $6)`, 
        [new_id, new_hash, false, 'designer', {value: body.email, verified: false}, hashed_pass]).then(async _ => {
            await verificationEmail(
                String(Deno.env.get('EMAIL_AUTH_USER')),
                body.email,
                new_hash,
                String(Deno.env.get('PLATFORM_NAME')),
                String(Deno.env.get('PLATFORM_HOST')),
            ).then(_ => {
                ctx.response.status = Status.OK
                return ctx.response.body = {
                    SuccMsg: 'Successfully registered'
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
    }).catch(_ => {
        ctx.response.status = Status.BadGateway
        return ctx.response.body = {
            ErrMsg: 'An error occurred, please retry later'
        }
    })
})