import { verify, Status } from '../deps.ts'
import { key } from "./key.ts"

export const jwtMiddleware = async (ctx, next) => {
    const token = ctx.request.headers.get('Authorization')
    try{
        await verify(token, key)
        next()
    }catch(_e){
        ctx.response.status = Status.Unauthorized
    }
}