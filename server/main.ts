// deps
import { Application, load } from "./deps.ts"
import { databaseConnection } from "./database/connection.ts"
import { stripeConnection } from "./stripe/connection.ts"
import { mailerConnection } from './mailer/mailerConnect.ts'

// universal routes
import { login } from "./routes/universal/login.ts"
import { emailVerificationRoute } from './routes/universal/emailVerification.ts'
import { forgotPasswordEmailSender } from "./routes/universal/forgotPasswordEmailSender.ts"
import { resetPassword } from "./routes/universal/resetPassword.ts"

// client routes
import { clientRegistration } from './routes/client/registration.ts'

// pro routes
import { proRegistration } from './routes/pro/registration.ts'

// middlewares
import {jwtMiddleware} from './auth/jwt.ts'

await load({export: true})
const app = new Application()
export const db = await databaseConnection()
export const stripe = await stripeConnection()
export const mailer = mailerConnection()

// client routes
app.use(clientRegistration.routes(), clientRegistration.allowedMethods())

// pro routes
app.use(proRegistration.routes(), proRegistration.allowedMethods())

// universal routes
app.use(login.routes(), login.allowedMethods())
app.use(emailVerificationRoute.routes(), emailVerificationRoute.allowedMethods())
app.use(forgotPasswordEmailSender.routes(), forgotPasswordEmailSender.allowedMethods())
app.use(resetPassword.routes(), resetPassword.allowedMethods())

// protected routes
// app.use(jwtMiddleware)

await app.listen({ port: Number(Deno.env.get('SERVER_PORT')) }).then(() => {
    console.log(`${Deno.env.get('API_NAME')}|${Deno.env.get('API_VERSION')} listening on port ${Deno.env.get('SERVER_PORT')}`)
});



