<script setup lang="ts">

definePageMeta({
    layout: 'private-pro',
    pageTransition: true,
    middleware: ['auth-checker', 'designer-checker'],
})
const route = useRoute()
const env = useRuntimeConfig().public

</script>

<template>
    <main class="p-10">
        <h1>account settings</h1>
    </main>
</template>

<style scoped>

</style>