import { Router, Status } from '../../deps.ts'

export const jwtRoute = new Router()
jwtRoute.post(`/api/${Deno.env.get('API_VERSION')}/jwt`, ctx => {
    return ctx.response.status = Status.OK
})