<script setup lang="ts">
import { authForm } from '../../store/states'
import { storeToRefs } from 'pinia'

const env = useRuntimeConfig()

const message = ref<Array<alertMessage>>([])

const openForm = authForm()
let { isOpen, signUpForm, logInForm, resetPasswordForm, email, password_signup, password_login } = storeToRefs(openForm)
const { closeAuth, openAuthLog, openAuthSign, openResetPassword } = openForm

const login = () => {
    message.value = [{type: 'success', value: 'this is a test success message'}]
}

const signup = () => {
    message.value = [{type: 'error', value: 'this is a test error message'}]
}

const resetPassword = () => {
    message.value = [{type: 'error', value: 'this is a test error message'}]
}

</script>

<template>
    <Popup :Message="message"/>
    <div v-if="isOpen" class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full backdrop-blur-sm" @click="closeAuth"></div>
    <Transition name="slide">
        <div v-if="signUpForm" class="fixed border top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-5 px-10 rounded-xl w-96 bg-c-neutral-0 shadow">
            <div class="mb-10">
                <h2 class="font-bold text-xl">Sign up as a UX expert</h2>
                <p class="text-sm">Already have an account? <button @click="openAuthLog" class="text-c-dark-blue action-effect font-semibold">Log in</button></p>
            </div>
            <div class="w-full text-c-neutral-500">
                <div class="mb-5">
                    <input class="py-2 w-full px-5 mb-3 border border-c-neutral-500 rounded-md outline-none focus:border-c-blue duration-200 text-c-neutral-800" type="email" v-model="email" placeholder="Email">
                    <p class="w-full text-sm">You will use this to login</p>
                </div>
                <div class="mb-10">
                    <input class="py-2 w-full px-5 mb-3 border border-c-neutral-500 rounded-md outline-none focus:border-c-blue duration-200 text-c-neutral-800" type="password" v-model="password_signup" placeholder="Password">
                    <p class="w-full text-sm">At least 8 characters, one uppercase, one lowercase and one special symbol (like !@#$%^)</p>
                </div>
                <div class="text-center">
                    <button @click="signup" class="text-c-neutral-0 py-2 px-5 bg-c-orange w-full action-effect font-semibold rounded-md mb-3">Sign up</button>
                    <p class="text-center w-full text-sm">By creating a {{ env.public.platformName }} account you accept our Terms of service and Privacy Policy.</p>
                </div>
            </div>
        </div>
    </Transition>


    <Transition name="slide">
        <div v-if="logInForm" class="fixed border top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-5 px-10 rounded-xl w-96 bg-c-neutral-0 shadow">
            <div class="mb-10">
                <h2 class="font-bold text-xl">Log in as a UX expert</h2>
                <p class="text-sm">No account? <button @click="openAuthSign" class="text-c-dark-blue action-effect font-semibold">Sign up</button></p>
            </div>
            <div class="w-full text-c-neutral-500">
                <div class="mb-5">
                    <input class="py-2 w-full px-5 mb-3 border border-c-neutral-500 rounded-md outline-none focus:border-c-blue duration-200 text-c-neutral-800" type="email" v-model="email" placeholder="Email">
                </div>
                <div class="mb-10">
                    <input class="py-2 w-full px-5 mb-3 border border-c-neutral-500 rounded-md outline-none focus:border-c-blue duration-200 text-c-neutral-800" type="password" v-model="password_login" placeholder="Password">
                </div>
                <div class="text-center">
                    <button @click="login" class="text-c-neutral-0 py-2 px-5 bg-c-orange w-full action-effect font-semibold rounded-md mb-3">Log in</button>
                    <button @click="openResetPassword" class="text-c-dark-blue action-effect font-semibold text-sm">Reset password</button>
                </div>
            </div>
        </div>
    </Transition>

    <Transition name="slide">
        <div v-if="resetPasswordForm" class="fixed border top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-5 px-10 rounded-xl w-96 bg-c-neutral-0 shadow">
            <div class="mb-10">
                <h2 class="font-bold text-xl">Enter your email to reset password</h2>
                <p class="text-sm">Follow the link you will receive by email to reasign a password to your account</p>
            </div>
            <div class="w-full text-c-neutral-500">
                <div class="mb-10">
                    <input class="py-2 w-full px-5 mb-3 border border-c-neutral-500 rounded-md outline-none focus:border-c-blue duration-200 text-c-neutral-800" type="email" v-model="email" placeholder="Email">
                </div>
                <div class="text-center">
                    <button @click="resetPassword" class="text-c-neutral-0 py-2 px-5 bg-c-neutral-300 w-full action-effect font-semibold rounded-md mb-3">Reset Password</button>
                    <button @click="openAuthLog" class="text-c-dark-blue action-effect font-semibold text-sm">Cancel</button>
                </div>
            </div>
        </div>
    </Transition>


</template>

<style scoped>
.slide-enter-from,
.slide-leave-to {
    filter: blur(20px);
    opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
    transition: .2s ease all;
}
</style>