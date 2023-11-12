import { Router } from '../deps.ts'

export const registrationClient = new Router()
registrationClient.post(`/api/${Deno.env.get('API_VERSION')}/registration-client`, async (ctx) => {
    if(!ctx.request.hasBody){
        ctx.throw(415)
    }
    const body  = await ctx.request.body().value
    ctx.response.status = 200
})