<script setup lang="ts">

definePageMeta({    
    layout: 'private-pro',
    pageTransition: true,
    middleware: ['auth-checker', 'moderator-checker'],
})

const env = useRuntimeConfig().public
</script>

<template>
    <main class="p-10">
        <h1>moderator dash</h1>
    </main>
</template>

<style scoped>

</style>