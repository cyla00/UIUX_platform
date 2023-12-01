<script setup lang="ts">
import axios from 'axios'

definePageMeta({
    pageTransition: true,
    middleware: ['hash-checker'],
})

const env = useRuntimeConfig().public
const message = ref<Array<alertMessage>>([])

const route = useRoute()
const hash = route.params.hash
const loading = ref<boolean>(false)

const new_password = ref<string>()
const repeat_password = ref<string>()

const resetPassword = async () => {

    if(new_password.value !== repeat_password.value){
        return message.value = [{type: 'error', value: 'Passwords do not match'}]
    }

    loading.value = true
    await axios.post(`http://localhost:${env.apiPort}/${env.apiBase}/${env.apiVersion}/reset-password`, {
        password: new_password.value
    }, {
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
        console.log(e);
        
        loading.value = false
        return message.value = [{type: 'error', value: e.response.data.ErrMsg}]
    })
}
</script>

<template>
    <main class="h-[100vh] flex justify-center">
        <Popup :Message="message"/>
        <div class="bg-c-neutral-0 m-auto p-10 border border-c-neutral-500 rounded-xl w-96">
            <div class="m-auto flex justify-center w-20">
                <img src="~/assets/reset-pass.webp" alt="">
            </div>
            <div class="text-center my-10">
                <h2 class="text-2xl font-bold">Reset your password</h2>
                <p class="text-sm font-normal">At least 8 characters, one uppercase, one lowercase and one special symbol (like !@#$%^)</p>
            </div>
            <div class="mb-10">
                <div class="mb-5">
                    <label>New password</label>
                    <input class="py-2 w-full px-5 mb-3 border border-c-neutral-500 rounded-md outline-none focus:border-c-blue duration-200 text-c-neutral-800" type="password" v-model="new_password">
                </div>
                
                <div>
                    <label>Repeat password</label>
                    <input class="py-2 w-full px-5 mb-3 border border-c-neutral-500 rounded-md outline-none focus:border-c-blue duration-200 text-c-neutral-800" type="password" v-model="repeat_password">
                </div>
            </div>
            <div class="m-auto">
                <button @click="resetPassword" class="text-c-neutral-0 py-2 px-5 bg-c-orange w-full action-effect font-semibold rounded-md mb-3">Continue <i v-if="loading" class='bx bx-loader-alt bx-flip-vertical bx-spin'></i></button>
            </div>
        </div>
    </main>
</template>

<style scoped>

</style>