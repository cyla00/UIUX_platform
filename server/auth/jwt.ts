import { verify, Status } from '../deps.ts'
import { key } from "./key.ts"

export const jwtMiddleware = async (ctx, next) => {
    const auth = ctx.request.headers.get("Authorization")
    const cleanedToken = auth.split(' ')[1]
    try{
        await verify(cleanedToken, key)
        next()
    }catch(_e){
        ctx.response.status = Status.Unauthorized
    }
}