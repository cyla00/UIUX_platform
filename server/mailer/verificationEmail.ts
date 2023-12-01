import { mailer } from '../main.ts'

export const verificationEmail = async (auth_email: string, user_email: string, user_hash: string, platform_name: string, platform_host: string) => {
    await mailer.send({
        from: auth_email,
        to: user_email,
        subject: `verify your ${platform_name} account!`,
        content: "CONTENT HERE",
        html: `
        <p>To continue your registration process, activate your account by following the link below.</p>
        <a href="http://${platform_host}/email-verification/${user_hash}">verify account</a>
        `,
    })
}