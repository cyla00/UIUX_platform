import { defineStore } from 'pinia'

export const authForm = defineStore('authForm', () => {
    const isOpen = ref<boolean>(false)
    const signUpForm = ref<boolean>(false)
    const logInForm = ref<boolean>(false)
  
    function openAuthSign() {
        isOpen.value = true
        logInForm.value = false
        signUpForm.value = true
    }

    function openAuthLog() {
        isOpen.value = true
        signUpForm.value = false
        logInForm.value = true
    }

    function closeAuth() {
        isOpen.value = false
        signUpForm.value = false
        logInForm.value = false
    }

    return { openAuthSign, openAuthLog, closeAuth, isOpen, signUpForm, logInForm }
})