import { Router, Status, create, getNumericDate, decodeBase64 } from '../../deps.ts'
import { key } from "../../auth/key.ts"
import { db } from '../../main.ts'
import { hashingVerification } from '../../auth/passwordHashing.ts'
import { UserInterface } from '../../database/interfaces.ts'
import { checkEmailFormat } from '../../mailer/emailFormat.ts'


export const login = new Router()
login.post(`/api/${Deno.env.get('API_VERSION')}/login`, async (ctx) => {

    const authHeaders  = ctx.request.headers.get('Authorization')
    const auth = authHeaders?.split(' ')[1]
    const hexEncoded = decodeBase64(String(auth))
    const textDecoder = new TextDecoder()
    const [email, password] = textDecoder.decode(hexEncoded).split(':')

    await db.queryObject<UserInterface>(`SELECT * FROM users WHERE email->>'value'=$1;`, [email]).then(async (res) => {

        if(res.rows.length <= 0){
            const email_check = checkEmailFormat(email)
            if(!email_check){
                ctx.response.status = Status.BadRequest
                return ctx.response.body = {
                    ErrMsg: 'Provide a valid email',
                }
            }
            ctx.response.status = Status.Unauthorized
                return ctx.response.body = {   
                    ErrMsg: 'not exists',
            }
        }
        if(!res.rows[0].email.verified){
            ctx.response.status = Status.BadRequest
            return ctx.response.body = {
                ErrMsg: 'Verify your email before connecting',
            }
        }
        const pass_check = await hashingVerification(res.rows[0].password, password)
        if(!pass_check){
            ctx.response.status = Status.Unauthorized
            return ctx.response.body = {
                ErrMsg: 'Incorrect credentials'
            }
        }
        
        const token = await create({ alg: "HS512", typ: "JWT", aud: "designer" }, {
            id: res.rows[0].id,
            role: res.rows[0].role,
            exp: getNumericDate((60*60)*4)
        }, key)
                            
        ctx.response.status = Status.OK
        return ctx.response.body = {
            SuccMsg: 'Successfully connected',
            Token: token,
        }
    }).catch(_ => {
        ctx.response.status = Status.BadGateway
        return ctx.response.body = {
            ErrMsg: 'An error occurred, please retry later',
        }
    })
})