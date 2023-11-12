<script setup lang="ts">

definePageMeta({    
    layout: 'client',
    pageTransition: true,
})

const env = useRuntimeConfig().public
console.log(env.apiBase);

</script>

<template>
    <main>
        login
    </main>
</template>

<style scoped>

</style>