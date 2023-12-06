import { defineStore } from 'pinia'
import axios from "axios"
import { jwtDecode } from "jwt-decode"

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

export const loginStatus = defineStore('loginStatus', () => {

    const env = useRuntimeConfig().public

    const isLogged = ref<boolean>(false)
    const isClient = ref<boolean>(false)
    const isDesigner = ref<boolean>(false)
    const isModerator = ref<boolean>(false)
    
    const checkLog = async () => {

        const token = await useCookie('token')
        
        if(!token.value){
            return isLogged.value = false
        }
        
        const rawToken = await jwtDecode(token.value)
            
        await axios.post(`http://localhost:${env.apiPort}/${env.apiBase}/${env.apiVersion}/jwt`, {}, {
            headers: { 
                Authorization: `${token.value}`, 
            }
        }).then(_ => {
            isLogged.value = true
            switch(rawToken.role){
                case 'client':
                    isClient.value = true
                    isDesigner.value = false
                    isModerator.value = false
                    break
                case 'designer':
                    isDesigner.value = true
                    isModerator.value = false
                    isClient.value = false
                    break
                case 'moderator':
                    isModerator.value = true
                    isClient.value = false
                    isDesigner.value = false
                    break
            }
            console.log('des ' + isDesigner.value, 'cli ' + isClient.value, 'mod ' + isModerator.value);
        }).catch(_ => {
            return isLogged.value = false
        })
    }


    const logout = async () => {
        const token = await useCookie('token')
        token.value = null
        return reloadNuxtApp({
            path: "/",
        })
    }

    return { isLogged, isClient, isDesigner, isModerator, checkLog, logout }
})