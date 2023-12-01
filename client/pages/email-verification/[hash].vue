<script setup lang="ts">
import axios from 'axios'

definePageMeta({
    layout: 'index-pro',
    pageTransition: true,
    middleware: ['hash-checker'],
})

const env = useRuntimeConfig().public
const message = ref<Array<alertMessage>>([])

const route = useRoute()
const hash = route.params.hash
const loading = ref<boolean>(false)

const verifyEmail = async () => {
    loading.value = true
    await axios.post(`http://localhost:${env.apiPort}/${env.apiBase}/${env.apiVersion}/email-verification`, {}, {
        headers: {
            Authorization: `${hash}`
        }
    }).then(res => {
        loading.value = false
        message.value = [{type: 'success', value: res.data.SuccMsg}]
        setTimeout(async () => {
            return await navigateTo('/')
        }, 3000)
    }).catch(e => {
        loading.value = false
        return message.value = [{type: 'error', value: e.response.data.ErrMsg}]
    })
}
</script>

<template>
    <main class="h-[90vh] flex justify-center">
        <Popup :Message="message"/>
        <div class="bg-c-neutral-0 m-auto p-10 border border-c-neutral-500 rounded-xl w-96">
            <div class="m-auto flex justify-center">
                <img src="~/assets/email-verification.webp" alt="">
            </div>
            <div class="text-center my-10">
                <h2 class="text-2xl font-bold">verify your email address</h2>
                <p class="text-sm font-normal">Your account has been successfully registered. To complete the process please verify your email address.</p>
            </div>
            <div class="m-auto">
                <button @click="verifyEmail" class="text-c-neutral-0 py-2 px-5 bg-c-orange w-full action-effect font-semibold rounded-md mb-3">Click here to Verify! <i v-if="loading" class='bx bx-loader-alt bx-flip-vertical bx-spin'></i></button>
            </div>
        </div>
    </main>
</template>

<style scoped>

</style>