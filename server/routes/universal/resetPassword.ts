import { Router, Status, checkPassword } from '../../deps.ts'
import { db } from '../../main.ts'
import { UserInterface } from '../../database/interfaces.ts'
import { bcryptHashing } from '../../auth/passwordHashing.ts'

export const resetPassword = new Router()
resetPassword.post(`/api/${Deno.env.get('API_VERSION')}/reset-password`, async (ctx) => {

    const body  = await ctx.request.body().value
    const authHeaders  = ctx.request.headers.get('Authorization')
    const old_hash = authHeaders?.split(' ')[1]

    if(!body.password){
        ctx.response.status = Status.BadRequest
        return ctx.response.body = {
            ErrMsg: 'Provide a valid email'
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

    const new_pass = await bcryptHashing(body.password)
    await db.queryObject<UserInterface>(`UPDATE users SET password=$1, hash=$2 WHERE hash=$3 RETURNING *;`, [new_pass, crypto.randomUUID(), old_hash]).then(res => {
        
        if(res.rows.length <= 0){
            ctx.response.status = Status.BadRequest
            return ctx.response.body = {
                ErrMsg: 'An error occurred, please retry later'
            }
        }

        ctx.response.status = Status.OK
        return ctx.response.body = {
            SuccMsg: 'Password changed successfully'
        }

    }).catch(_ => {
        ctx.response.status = Status.BadGateway
        return ctx.response.body = {
            ErrMsg: 'An error occurred, please retry later'
        }
    })
})