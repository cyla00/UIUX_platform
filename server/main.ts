// deps
import { Application, load } from "./deps.ts"
import { databaseConnection } from "./database/connection.ts"
import { StripeConnection } from "./stripe/connection.ts"

// client routes
import { ClientRegistration } from './routes/client/registration.ts'
import { ClientLogin } from './routes/client/login.ts'

// pro routes
import { ProRegistration } from './routes/pro/registration.ts'
import { ProLogin } from './routes/pro/login.ts'

// middlewares
import {jwtMiddleware} from './auth/jwt.ts'

await load({export: true})
const app = new Application()
export const db = await databaseConnection()
export const stripe = await StripeConnection()

// client routes
app.use(ClientRegistration.routes(), ClientRegistration.allowedMethods())
app.use(ClientLogin.routes(), ClientLogin.allowedMethods())

// pro routes
app.use(ProRegistration.routes(), ProRegistration.allowedMethods())
app.use(ProLogin.routes(), ProLogin.allowedMethods())


// protected routes
app.use(jwtMiddleware)

await app.listen({ port: Number(Deno.env.get('SERVER_PORT')) }).then(() => {
    console.log(`${Deno.env.get('API_NAME')}|${Deno.env.get('API_VERSION')} listening on port ${Deno.env.get('SERVER_PORT')}`)
});



