import { defineStore } from 'pinia'

export const authForm = defineStore('authForm', () => {
    const isOpen = ref<boolean>(false)
    const signUpForm = ref<boolean>(false)
    const logInForm = ref<boolean>(false)
    const resetPasswordForm = ref<boolean>(false)
  
    function openAuthSign() {
        isOpen.value = true
        logInForm.value = false
        signUpForm.value = true
        resetPasswordForm.value = false
    }

    function openAuthLog() {
        isOpen.value = true
        signUpForm.value = false
        logInForm.value = true
        resetPasswordForm.value = false
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
    }

    return { openAuthSign, openAuthLog, closeAuth, isOpen, signUpForm, logInForm, openResetPassword, resetPasswordForm }
})

export const userLogger = defineStore('userLogger', () => {
    const isLogged = ref<boolean>(false)
  
    function checkUserLog() {
        isLogged.value = true
    }

    return { checkUserLog, isLogged }
})