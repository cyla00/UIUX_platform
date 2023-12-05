<script setup lang="ts">

definePageMeta({
    layout: 'private-pro',
    pageTransition: true,
    middleware: ['auth-checker'],
})
const route = useRoute()
const env = useRuntimeConfig().public

</script>

<template>
    <main class="p-10">
        <h1>help</h1>
    </main>
</template>

<style scoped>

</style>