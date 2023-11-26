<script setup lang="ts">
import { authForm } from '../../store/states'
import { storeToRefs } from 'pinia'

const message = ref<Array<alertMessage>>([])
const email = ref<string>()
const password = ref<string>()

const openForm = authForm()
let { isOpen, signUpForm, logInForm } = storeToRefs(openForm)
const { closeAuth, openAuthLog, openAuthSign } = openForm


</script>

<template>
    <div v-if="isOpen" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 h-full w-full backdrop-blur-md">
        <Popup :Message="message"/>

        <Transition name="slide">
            <div v-if="signUpForm" class="z-20 absolute border top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-xl">
                <i class='bx bx-x' @click="closeAuth"></i>
                <h2 class="font-semibold">Sign up as a UX expert</h2>
                <p>Already have an account? <button @click="openAuthLog">Log in</button></p>
            </div>
        </Transition>

        <Transition name="slide">
            <div v-if="logInForm" class="z-20 absolute border top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-xl">
                <i class='bx bx-x' @click="closeAuth"></i>
                <h2 class="font-semibold">Login to your dashboard</h2>
                <p>Don't have an account? <button @click="openAuthSign">Signup</button></p>
            </div>
        </Transition>
        
    </div>
</template>

<style scoped>
.slide-enter-from,
.slide-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease-in-out;
}
</style>