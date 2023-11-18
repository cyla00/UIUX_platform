<script setup lang="ts">

definePageMeta({
    layout: 'private-pro',
    pageTransition: true,
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