<script setup lang="ts">

definePageMeta({
    layout: 'index-pro',
    pageTransition: true,
})

import { authForm } from '../store/states'
import { storeToRefs } from 'pinia'

const env = useRuntimeConfig()

const message = ref<Array<alertMessage>>([])

const openForm = authForm()
let { isOpen, signUpForm, logInForm, resetPasswordForm, email, password_signup, password_login } = storeToRefs(openForm)
const { closeAuth, openAuthLog, openAuthSign, openResetPassword } = openForm

const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

</script>

<template>
    <main class="text-center text-sm font-medium ">

        <div class="bg-c-neutral-50">
            <div class="text-center h-[95vh] flex justify-center w-4/5 m-auto">
                <div class="m-auto">
                    <h2 class="text-7xl font-bold mb-20">Seasoned UX expert? Give professional insights and help improve products</h2>
                    <button @click="scrollTop" class="mr-2 action-effect py-2 px-5 bg-c-orange rounded-lg text-c-neutral-0 text-xl">Get started</button>
                </div>
            </div>
        </div>
        

        <div class="h-screen flex justify-center">

            <div class="flex w-4/5 m-auto">

                <div class="flex justify-center text-start">
                    <div class="m-auto w-96">
                        <h2 class="text-6xl">How it works</h2>
                        <p class="text-2xl">maybe some content here for seo and remove blank space</p>
                    </div>
                </div>

                <div class="m-auto"></div>

                <div class="">

                    <div class="flex mb-2">
                        <!-- card -->
                        <div class="w-96 h-80 border text-start p-7 flex mr-2">
                            <div class="m-1">
                                <div class="flex text-c-blue text-sm">
                                    <p class="p-1 bg-c-blue-light">01</p>
                                </div>
                                <div class="my-3">
                                    <h3 class="text-3xl font-bold">Sign up</h3>
                                </div>
                                <div>
                                    <p class="text-lg">Join our community of UX experts by creating a profile. Showcase your skills and experience to stand out to businesses seeking your expertise.</p>
                                </div>
                            </div>
                        </div>
                        <!-- card -->

                        <!-- card -->
                        <div class="w-96 h-80 border text-start p-7 flex">
                            <div class="m-1">
                                <div class="flex text-c-blue text-sm">
                                    <p class="p-1 bg-c-blue-light">02</p>
                                </div>
                                <div class="my-3">
                                    <h3 class="text-3xl font-bold">Pick Projects</h3>
                                </div>
                                <div>
                                    <p class="text-lg">Get matched with digital products seeking evaluation. Choose projects that align with your expertise and interests.</p>
                                </div>
                            </div>
                        </div>
                        <!-- card -->
                    </div>

                    <div class="flex mb-2">
                        <!-- card -->
                        <div class="w-96 h-80 border text-start p-7 flex mr-2">
                            <div class="m-1">
                                <div class="flex text-c-blue text-sm">
                                    <p class="p-1 bg-c-blue-light">03</p>
                                </div>
                                <div class="my-3">
                                    <h3 class="text-3xl font-bold">Give Feedback</h3>
                                </div>
                                <div>
                                    <p class="text-lg">Assess digital products and share your valuable insights. Help businesses improve their user experiences.</p>
                                </div>
                            </div>
                        </div>
                        <!-- card -->

                        <!-- card -->
                        <div class="w-96 h-80 border text-start p-7 flex">
                            <div class="m-1">
                                <div class="flex text-c-blue text-sm">
                                    <p class="p-1 bg-c-blue-light">04</p>
                                </div>
                                <div class="my-3">
                                    <h3 class="text-3xl font-bold">Earn Fair Fees</h3>
                                </div>
                                <div>
                                    <p class="text-lg">Receive compensation for your contributions. We ensure fair pay for your time and expertise.</p>
                                </div>
                            </div>
                        </div>
                        <!-- card -->
                    </div>

                </div>

            </div>

        </div>

        <div class="text-center flex justify-center bg-c-neutral-50 py-20">
            <div class="m-auto w-4/5">
                <h2 class="text-7xl font-bold mb-20">Help brands build exceptional digital experiences</h2>
                <button @click="scrollTop" class="mr-2 action-effect py-2 px-5 bg-c-orange rounded-lg text-c-neutral-0 text-xl">Sign up</button>
            </div>
        </div>

    </main>
</template>

<style scoped>

</style>