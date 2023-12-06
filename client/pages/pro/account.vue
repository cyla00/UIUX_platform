<script setup lang="ts">

definePageMeta({
    layout: 'private-pro',
    pageTransition: true,
    middleware: ['auth-checker', 'designer-checker'],
})
const route = useRoute()
const env = useRuntimeConfig().public

const completeAccount = ref<boolean>(false) 
const isCompleted = useCookie('isComplete')

if(isCompleted.value == false){
    completeAccount.value = true
}
</script>

<template>
    <main class="p-10 w-full">
        <div v-if="completeAccount" class="flex">
            <p class="bg-c-orange m-auto py-1 px-5 rounded-full text-semibold text-c-neutral-0">Complete your information to get verified and access clients projects</p>
        </div>
        <h1>account settings</h1>
    </main>
</template>

<style scoped>

</style>