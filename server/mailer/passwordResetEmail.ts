import { mailer } from '../main.ts'

export const passwordResetEmail = async (auth_email: string, user_email: string, user_hash: string, platform_name: string, platform_host: string) => {
    await mailer.send({
        from: auth_email,
        to: user_email,
        subject: `Reset your ${platform_name} account access!`,
        content: "CONTENT HERE",
        html: `
        <p>Continue to <a href="http://${platform_host}/reset-password/${user_hash}">reset your password</a></p>
        `,
    })
}