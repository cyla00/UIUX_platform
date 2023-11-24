<script setup lang="ts">

definePageMeta({
    layout: 'index-pro',
    pageTransition: true,
})


const message = ref<Array<alertMessage>>([])

const triggersucc = () => {
    message.value.push({type: 'success', value: 'success message here and go'}) 
}

const triggererr = () => {
    message.value.push({type: 'error', value: 'error message here!'})
}
</script>

<template>
    <main class="text-center font-bold">
        <Popup :Message="message"/>
        <h1>pro</h1>
        <ProAuthentication/>
        <button @click="triggersucc" class="m-5">trigger succ</button>
        <button @click="triggererr" class="m-5">trigger err</button>
    </main>
</template>

<style scoped>

</style>