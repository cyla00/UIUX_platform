import { defineStore } from 'pinia'

export const authForm = defineStore('authForm', () => {
    
    const isOpen = ref<boolean>(false)
    const signUpForm = ref<boolean>(false)
    const logInForm = ref<boolean>(false)
    const resetPasswordForm = ref<boolean>(false)

    const email = ref<string>('')
    const password_signup = ref<string>('')
    const password_login = ref<string>('')

    function openAuthSign() {
        isOpen.value = true
        logInForm.value = false
        signUpForm.value = true
        resetPasswordForm.value = false
        password_login.value = ''
    }

    function openAuthLog() {
        isOpen.value = true
        signUpForm.value = false
        logInForm.value = true
        resetPasswordForm.value = false
        password_signup.value = ''
    }

    function openResetPassword() {
        isOpen.value = true
        signUpForm.value = false
        logInForm.value = false
        resetPasswordForm.value = true
    }

    function closeAuth() {
        isOpen.value = false
        signUpForm.value = false
        logInForm.value = false
        resetPasswordForm.value = false

        email.value = ''
        password_signup.value = ''
        password_login.value = ''
    }

    return { openAuthSign, openAuthLog, closeAuth, isOpen, signUpForm, logInForm, openResetPassword, resetPasswordForm, email, password_signup, password_login }
})


export const authClientForm = defineStore('authClientForm', () => {

    const isOpenClient = ref<boolean>(false)
    const signUpFormClient = ref<boolean>(false)
    const logInFormClient= ref<boolean>(false)
    const resetPasswordFormClient = ref<boolean>(false)

    const email_client = ref<string>('')
    const password_signup_client = ref<string>('')
    const password_login_client = ref<string>('')

    function openAuthSignClient() {
        isOpenClient.value = true
        logInFormClient.value = false
        signUpFormClient.value = true
        resetPasswordFormClient.value = false
        password_login_client.value = ''
    }

    function openAuthLogClient() {
        isOpenClient.value = true
        signUpFormClient.value = false
        logInFormClient.value = true
        resetPasswordFormClient.value = false
        password_signup_client.value = ''
    }

    function openResetPasswordClient() {
        isOpenClient.value = true
        signUpFormClient.value = false
        logInFormClient.value = false
        resetPasswordFormClient.value = true
    }

    function closeAuthClient() {
        isOpenClient.value = false
        signUpFormClient.value = false
        logInFormClient.value = false
        resetPasswordFormClient.value = false

        email_client.value = ''
        password_signup_client.value = ''
        password_login_client.value = ''
    }

    return { isOpenClient, signUpFormClient, logInFormClient, resetPasswordFormClient, email_client, password_signup_client, password_login_client, openAuthSignClient, openAuthLogClient, openResetPasswordClient, closeAuthClient }
})