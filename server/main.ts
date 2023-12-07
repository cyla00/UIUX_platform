// deps
import { Application, load, oakCors } from "./deps.ts"
import { databaseConnection } from "./database/connection.ts"
import { stripeConnection } from "./stripe/connection.ts"
import { mailerConnection } from './mailer/mailerConnect.ts'

// universal routes
import { login } from "./routes/universal/login.ts"
import { emailVerificationRoute } from './routes/universal/emailVerification.ts'
import { forgotPasswordEmailSender } from "./routes/universal/forgotPasswordEmailSender.ts"
import { resetPassword } from "./routes/universal/resetPassword.ts"
import { jwtRoute } from "./routes/universal/jwt.ts"
import { hashChecker } from "./routes/universal/hashChecker.ts"

// client routes
import { clientRegistration } from './routes/client/registration.ts'

// pro routes
import { proRegistration } from './routes/pro/registration.ts'

// middlewares
import {jwtMiddleware} from './auth/jwt.ts'


const app = new Application()
await load({export: true})
app.use(oakCors({
    origin: /^.+localhost:(3000|3001)$/,
}))

export const db = await databaseConnection()
export const stripe = await stripeConnection()
export const mailer = mailerConnection()

// client routes
app.use(clientRegistration.routes(), clientRegistration.allowedMethods()) // registration body

// pro routes
app.use(proRegistration.routes(), proRegistration.allowedMethods()) // registration body

// universal routes
app.use(login.routes(), login.allowedMethods()) // basic auth
app.use(emailVerificationRoute.routes(), emailVerificationRoute.allowedMethods()) // input from front-end
app.use(forgotPasswordEmailSender.routes(), forgotPasswordEmailSender.allowedMethods()) // needs email body
app.use(resetPassword.routes(), resetPassword.allowedMethods()) // needs password body and url hash as bearer auth
app.use(hashChecker.routes(), hashChecker.allowedMethods()) // checks if hash is valid
// protected routes
app.use(jwtMiddleware)
app.use(jwtRoute.routes(), jwtRoute.allowedMethods())

await app.listen({ port: Number(Deno.env.get('SERVER_PORT')) }).then(() => {
    console.log(`${Deno.env.get('API_NAME')}|${Deno.env.get('API_VERSION')} listening on port ${Deno.env.get('SERVER_PORT')}`)
})



