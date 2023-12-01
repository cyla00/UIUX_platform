import { Router, Status } from '../../deps.ts'
import { db } from '../../main.ts'
import { UserInterface } from '../../database/interfaces.ts'

export const emailVerificationRoute = new Router()
emailVerificationRoute.post(`/api/${Deno.env.get('API_VERSION')}/email-verification`, async (ctx) => {
    const old_hash  = ctx.request.headers.get('Authorization')
    
    await db.queryObject<UserInterface>(`UPDATE users SET hash=$1, email=jsonb_set(email, '{verified}', 'true') WHERE hash=$2 AND email->>'verified'=$3 RETURNING *;`, [crypto.randomUUID(), old_hash, false]).then(res => {
        if(res.rows.length <=0){
            ctx.response.status = Status.BadRequest
            return ctx.response.body = {
                ErrMsg: 'An error occurred, please retry later',
            }
        }
        ctx.response.status = Status.OK
        return ctx.response.body = {
            SuccMsg: 'Email successfully verified'
        }
    }).catch(e => {
        ctx.response.status = Status.BadGateway
        return ctx.response.body = {
            ErrMsg: 'An error occurred, please retry later',
        }
    })
})