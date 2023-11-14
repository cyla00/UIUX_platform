import { proUser } from '../database/interfaces.ts'
import { Router } from '../deps.ts'
import { db } from '../main.ts'

export const registrationPro = new Router()
registrationPro.post(`/api/${Deno.env.get('API_VERSION')}/registration-pro`, async (ctx) => {
    const DB = await db.collection<proUser>(`${Deno.env.get('PRO_USER_COLLECTION')}`)
    console.log(DB);
    
    const body  = await ctx.request.body().value
    ctx.response.status = 200
})