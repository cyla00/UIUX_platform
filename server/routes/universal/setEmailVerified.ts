import { UserInterface } from '../../database/interfaces.ts';
import { Router, Status } from '../../deps.ts'
import { db } from '../../main.ts'


export const setEmailValid = new Router()
setEmailValid.post(`/api/${Deno.env.get('API_VERSION')}/verify-email`, async (ctx) => {
    
})