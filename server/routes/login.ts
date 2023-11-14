import { UserInterface } from '../database/interfaces.ts';
import { Router, Status, create, getNumericDate, base64, hex } from '../deps.ts'
import { key } from "../auth/key.ts"
import { db } from '../main.ts'


export const login = new Router()
login.post(`/api/${Deno.env.get('API_VERSION')}/login`, async (ctx) => {

    const users = db.collection<UserInterface>(`${Deno.env.get('USER_COLLECTION')}`)

    const authHeaders  = ctx.request.headers.get('Authorization')
    const auth = authHeaders?.split(' ')[1]
    const hexEncoded = base64.decode(String(auth))
    const textDecoder = new TextDecoder();
    const [email, password] = textDecoder.decode(hexEncoded).split(':')
    // check if user exists before jwt
    const token = await create({ alg: "HS512", typ: "JWT" }, { 
        id: 'test id',
        exp: getNumericDate(60*60*3) 
    }, key)
    
    ctx.response.status = Status.OK
    ctx.response.body = {
        SuccMsg: 'Successfully connected',
        Token: token,
    }
})