import { Router } from '../../deps.ts'
import { db } from '../../main.ts'
import { verificationEmail } from '../../mailer/verificationEmail.ts'
import { bcryptHashing } from '../../auth/passwordHashing.ts'
import { Status } from 'https://deno.land/std@0.200.0/http/http_status.ts'

export const clientRegistration = new Router()
clientRegistration.post(`/api/${Deno.env.get('API_VERSION')}/client/registration`, async (ctx) => {

    const body  = await ctx.request.body().value
    const new_hash = crypto.randomUUID()
    const hashed_pass = await bcryptHashing(body.password)
    const new_id = crypto.randomUUID()
    
    try{
        // register client
    }catch(_){
        ctx.response.status = Status.BadGateway
        return ctx.response.body = {
            ErrMsg: 'An error occurred, please retry later'
        }
    }
})