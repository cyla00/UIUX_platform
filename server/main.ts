// deps
import { Application, Router, load } from "./deps.ts";

// routes
import { registrationPro } from './routes/registrationPro.ts'
import { registrationClient } from './routes/registrationClient.ts'
import { login } from './routes/login.ts'

// middlewares
import {jwtMiddleware} from './auth/jwt.ts'

await load({export: true})
const app = new Application();
export const router = new Router();

app.use(registrationPro.routes(), registrationPro.allowedMethods())
app.use(registrationClient.routes(), registrationClient.allowedMethods())
app.use(login.routes(), login.allowedMethods())


// protected routes
app.use(jwtMiddleware)

await app.listen({ port: Number(Deno.env.get('SERVER_PORT')) }).then(() => {
    console.log(`${Deno.env.get('API_NAME')}|${Deno.env.get('API_VERSION')} listening on port ${Deno.env.get('SERVER_PORT')}`);
});



