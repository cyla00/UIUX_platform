import { Router } from '../../deps.ts'
import { UserInterface } from '../../database/interfaces.ts'
import { db } from '../../main.ts'
import { verificationEmail } from '../../mailer/verificationEmail.ts'
import { bcryptHashing } from '../../auth/passwordHashing.ts'
import { Status } from 'https://deno.land/std@0.200.0/http/http_status.ts'

export const clientRegistration = new Router()
clientRegistration.post(`/api/${Deno.env.get('API_VERSION')}/client/registration`, async (ctx) => {
    const users = db.collection<UserInterface>(`${Deno.env.get('USER_COLLECTION')}`)

    const body  = await ctx.request.body().value
    const new_hash = crypto.randomUUID()
    const hashed_pass = await bcryptHashing(body.password)
    const new_id = crypto.randomUUID()
    
    try{
        await users.insertOne({
            stripeId: '',
            id: new_id,
            hash: new_hash,
            createdAt: new Date().toString(),
            lastLogin: '',
            active: false,
            role: 'client',
            email: body.email,
            password: hashed_pass,
            username: body.username,
            firstName: body.firstName,
            lastName: body.lastName,
            tags: [],
            country: body.country,
            paypalUrl: '',
            linkedinUrl: '',
            portfolio: [],
            reviews: [],
            ratings: [],
            projects: [],
        }).then(async (_) => {
            await verificationEmail(String(Deno.env.get('EMAIL_AUTH_USER')), body.email, new_hash, String(Deno.env.get('PLATFORM_NAME')), String(Deno.env.get('PLATFORM_HOST'))).then(_ => {
                ctx.response.status = Status.OK
                return ctx.response.body = {
                    SuccMsg: 'Account successfully created'
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
    }catch(_){
        ctx.response.status = Status.BadGateway
        return ctx.response.body = {
            ErrMsg: 'An error occurred, please retry later'
        }
    }
})