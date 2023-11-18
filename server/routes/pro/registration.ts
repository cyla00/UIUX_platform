import { Router } from '../../deps.ts'
import { UserInterface } from '../../database/interfaces.ts'
import { db } from '../../main.ts'

export const ProRegistration = new Router()
ProRegistration.post(`/api/${Deno.env.get('API_VERSION')}/pro/registration`, async (ctx) => {
    const users = db.collection<UserInterface>(`${Deno.env.get('USER_COLLECTION')}`)

    const body  = await ctx.request.body().value
    
    ctx.response.status = 200
})