<script setup lang="ts">

definePageMeta({
    layout: 'index-pro',
    pageTransition: true,
})

const errMsg = ref<Array<string>>([])
const succMsg = ref<Array<string>>([])

const triggersucc = () => {
    succMsg.value.push('test success message awdawd awd awd awd ' + succMsg.value.length.toString()) 
}

const triggererr = () => {
    errMsg.value.push('test error message' + errMsg.value.length.toString())
}
</script>

<template>
    <main class="text-center font-bold">
        <Popup :ErrMsg="errMsg" :SuccMsg="succMsg"/>
        <h1>pro</h1>
        <ProAuthentication/>
        <button @click="triggersucc" class="m-5">trigger succ</button>
        <button @click="triggererr" class="m-5">trigger err</button>
    </main>
</template>

<style scoped>

</style>