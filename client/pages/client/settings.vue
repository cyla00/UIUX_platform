<script setup lang="ts">

definePageMeta({
    layout: 'private-client',
    pageTransition: true,
    middleware: ['auth-checker', 'client-checker'],
})
const route = useRoute()
const env = useRuntimeConfig().public

</script>

<template>
    <main class="text-center font-bold">
        <h1>client</h1>
    </main>
</template>

<style scoped>

</style>