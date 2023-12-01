<script setup lang="ts">
import { loginStatus } from '../store/states'
import { storeToRefs } from 'pinia'

const logStatus = loginStatus()
const { isLogged, isClient, isDesigner, isModerator } = storeToRefs(logStatus)
const { logout } = logStatus
</script>

<template>
  <div>
    <header class="font-bold">
      <NuxtLink to="/pro/settings" class="mr-2 action-effect">settings</NuxtLink>
      <NuxtLink to="/pro/audit/123" class="mr-2 action-effect">click me to open project 123</NuxtLink>
      <NuxtLink to="/pro/dashboard" class="mr-2 action-effect">dashboard</NuxtLink>

      <button @click="logout" class="mr-2 action-effect">logout</button>
    </header>
    
    <slot />

  </div>
</template>

<style scoped>

</style>