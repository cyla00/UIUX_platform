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
    <main>
        work page projectId: {{ route.params.projectId }}
    </main>
</template>

<style scoped>

</style>