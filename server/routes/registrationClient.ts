import { Router } from '../deps.ts'
import { clientUser } from '../database/interfaces.ts'
import { db } from '../main.ts'

export const registrationClient = new Router()
registrationClient.post(`/api/${Deno.env.get('API_VERSION')}/registration-client`, async (ctx) => {
    const DB = await db.collection<clientUser>(`${Deno.env.get('PRO_USER_COLLECTION')}`)
    const body  = await ctx.request.body().value
    ctx.response.status = 200
})