import { SMTPClient } from "../deps.ts"

export const mailerConnection = () => {
    try{
        const mailer = new SMTPClient({
            connection: {
                hostname: String(Deno.env.get('EMAIL_AUTH_HOST')),
                port: 465,
                tls: true,
                auth: {
                    username: String(Deno.env.get('EMAIL_AUTH_USER')),
                    password: String(Deno.env.get('EMAIL_AUTH_PWD')),
                }
            }
        })
        if(Deno.env.get('STATUS') !== 'production'){
            console.log('SMTP client connected')
        }
        return mailer
    }catch(e){
        throw new Error(e);
    }
}