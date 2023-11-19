// deps
import { Application, load } from "./deps.ts"
import { databaseConnection } from "./database/connection.ts"
import { StripeConnection } from "./stripe/connection.ts"

// universal routes
import { login } from "./routes/universal/login.ts"

// client routes
import { clientRegistration } from './routes/client/registration.ts'

// pro routes
import { proRegistration } from './routes/pro/registration.ts'

// middlewares
import {jwtMiddleware} from './auth/jwt.ts'

await load({export: true})
const app = new Application()
export const db = await databaseConnection()
export const stripe = await StripeConnection()

// universal routes
app.use(login.routes(), login.allowedMethods())

// client routes
app.use(clientRegistration.routes(), clientRegistration.allowedMethods())

// pro routes
app.use(proRegistration.routes(), proRegistration.allowedMethods())



// protected routes
app.use(jwtMiddleware)

await app.listen({ port: Number(Deno.env.get('SERVER_PORT')) }).then(() => {
    console.log(`${Deno.env.get('API_NAME')}|${Deno.env.get('API_VERSION')} listening on port ${Deno.env.get('SERVER_PORT')}`)
});



