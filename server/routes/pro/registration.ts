import { Router, checkPassword } from '../../deps.ts'
import { UserInterface } from '../../database/interfaces.ts'
import { db } from '../../main.ts'
import { verificationEmail } from '../../mailer/verificationEmail.ts'
import { checkEmailFormat } from '../../mailer/emailFormat.ts'
import { bcryptHashing } from '../../auth/passwordHashing.ts'
import { Status } from 'https://deno.land/std@0.200.0/http/http_status.ts'

export const proRegistration = new Router()
proRegistration.post(`/api/${Deno.env.get('API_VERSION')}/designer/registration`, async (ctx) => {

    const users = db.collection<UserInterface>(`${Deno.env.get('USER_COLLECTION')}`)

    const body  = await ctx.request.body().value
    const new_hash = crypto.randomUUID()
    const hashed_pass = await bcryptHashing(body.password)
    const new_id = crypto.randomUUID()

    if(!body.password || !body.email){
        ctx.response.status = Status.BadRequest
        return ctx.response.body = {
            ErrMsg: 'Provide the required credentials'
        }
    }

    const passwordValid = checkPassword({
        password: body.password,
        minLen: 8,
        containsNum: true,
        containsAlphabet: true,
        containsSpecialChar: true,
    })

    if(!passwordValid){
        ctx.response.status = Status.BadRequest
        return ctx.response.body = {
            type: 'Provide a stronger password'
        }
    }
    
    if(!checkEmailFormat(body.email)){
        ctx.response.status = Status.BadRequest
        return ctx.response.body = {
            type: 'Provide a valid email'
        }
    }

    const check_existence = await users.findOne({email: {value: body.email, verified: Boolean()}})
    if(check_existence){
        ctx.response.status = Status.BadRequest
        return ctx.response.body = {
            account: {
                exists: true
            }  
        }
    }

    try{
        await users.insertOne({
            stripeId: '',
            id: new_id,
            hash: new_hash,
            createdAt: new Date().toString(),
            lastLogin: '',
            active: false,
            role: String(Deno.env.get('DESIGNER_ROLE')),
            jobTitle: '',
            seniority: '',
            industryExperience: [],
            designSpeciality: [],
            email: {
                value: body.email,
                verified: false
            },
            password: hashed_pass,
            username: '',
            firstName: '',
            lastName: '',
            country: '',
            paypalUrl: '',
            linkedinUrl: '',
            portfolio: {
                url: '',
                verified: false,
            },
            reviews: [],
            ratings: [],
            projects: [],
        }).then(async _ => {
            await verificationEmail(String(Deno.env.get('EMAIL_AUTH_USER')), body.email, new_hash, String(Deno.env.get('PLATFORM_NAME')), String(Deno.env.get('PLATFORM_HOST'))).then(_ => {
                ctx.response.status = Status.OK
                return ctx.response.body = {
                    SuccMsg: 'Account successfully created'
                }
            }).catch(_ => {
                ctx.response.status = Status.BadGateway
                return ctx.response.body = {
                    ErrMsg: 'An error occurred, please retry later'
                }
            })
        }).catch(_ => {
            ctx.response.status = Status.BadGateway
            return ctx.response.body = {
                ErrMsg: 'An error occurred, please retry later'
            }
        })
    }catch(_){
        ctx.response.status = Status.BadGateway
        return ctx.response.body = {
            ErrMsg: 'An error occurred, please retry later'
        }
    }
})