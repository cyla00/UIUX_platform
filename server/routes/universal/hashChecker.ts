import { Router, Status } from '../../deps.ts'
import { db } from '../../main.ts'
import { UserInterface } from '../../database/interfaces.ts'

export const hashChecker = new Router()
hashChecker.post(`/api/${Deno.env.get('API_VERSION')}/hash-checker`, async ctx => {

    const hash  = ctx.request.headers.get('Authorization')
    
    await db.queryObject<UserInterface>(`SELECT * FROM users WHERE hash=$1`, [hash]).then(res => {
        if(res.rowCount === 0){
            return ctx.response.status = Status.BadRequest
        }
        return ctx.response.status = Status.OK
    }).catch(err => {
        return ctx.response.status = Status.BadRequest
    })
})