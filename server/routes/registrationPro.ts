import { Router } from '../deps.ts'

export const registrationPro = new Router()
registrationPro.post(`/api/${Deno.env.get('API_VERSION')}/registration-pro`, async (ctx) => {
    if(!ctx.request.hasBody){
        ctx.throw(415)
    }
    const body  = await ctx.request.body().value
    ctx.response.status = 200
})