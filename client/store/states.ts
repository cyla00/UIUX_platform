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