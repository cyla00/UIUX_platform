import { Router, Status } from '../deps.ts'
import { db } from '../main.ts'


export const login = new Router()
login.post(`/api/${Deno.env.get('API_VERSION')}/login`, async (ctx) => {

    const body  = await ctx.request.body().value
    console.log(body);
    
    ctx.response.status = Status.OK
    ctx.response.body = {
        SuccMsg: 'Successfully connected'
    }
})