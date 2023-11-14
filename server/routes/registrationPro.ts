import { UserInterface } from '../database/interfaces.ts'
import { Router } from '../deps.ts'
import { db } from '../main.ts'

export const registrationPro = new Router()
registrationPro.post(`/api/${Deno.env.get('API_VERSION')}/registration-pro`, async (ctx) => {

    const users = db.collection<UserInterface>(`${Deno.env.get('USER_COLLECTION')}`)
    
    const body  = await ctx.request.body().value
    ctx.response.status = 200
})