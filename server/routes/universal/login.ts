import { UserInterface } from '../../database/interfaces.ts';
import { Router, Status, create, getNumericDate, decodeBase64 } from '../../deps.ts'
import { key } from "../../auth/key.ts"
import { db } from '../../main.ts'
import { hashingVerification } from '../../auth/passwordHashing.ts'


export const login = new Router()
login.post(`/api/${Deno.env.get('API_VERSION')}/login`, async (ctx) => {

    const users = db.collection<UserInterface>(`${Deno.env.get('USER_COLLECTION')}`)

    const authHeaders  = ctx.request.headers.get('Authorization')
    const auth = authHeaders?.split(' ')[1]
    const hexEncoded = decodeBase64(String(auth))
    const textDecoder = new TextDecoder();
    const [email, password] = textDecoder.decode(hexEncoded).split(':')

    await users.findOne({email: email}).then(async (res) => {
        if(!res){
            ctx.response.status = Status.Unauthorized
            return ctx.response.body = {
                ErrMsg: 'Incorrect credentials',
            }
        }
        else{
            const check = await hashingVerification(String(res?.password), password)

            if(!check){
                ctx.response.status = Status.Unauthorized
                return ctx.response.body = {
                    ErrMsg: 'Incorrect credentials',
                }
            }
                
            const token = await create({ alg: "HS512", typ: "JWT", aud: "designer" }, { 
                // other user data
                id: res?.id,
                exp: getNumericDate((60*60)*4)
            }, key)
                    
            ctx.response.status = Status.OK
            return ctx.response.body = {
                SuccMsg: 'Successfully connected',
                Token: token,
            }
        } 
    }).catch(_ => {
        ctx.response.status = Status.BadGateway
        return ctx.response.body = {
            ErrMsg: 'An error occurred, please retry later',
        }
    })
})