import { Router } from '../deps.ts'

export const registration = new Router()
registration.post(`/api/${Deno.env.get('API_VERSION')}/registration`, async (ctx) => {
    if(!ctx.request.hasBody){
        ctx.throw(415)
    }
    const body  = await ctx.request.body().value
    ctx.response.status = 200
})