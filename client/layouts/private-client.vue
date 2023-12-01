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
        <NuxtLink to="/client/settings" class="mr-2 action-effect">settings</NuxtLink>
        <NuxtLink to="/client/dashboard" class="mr-2 action-effect">dashboard</NuxtLink>

        <button @click="logout" class="mr-2 action-effect">logout</button>
      </header>
      
      <slot />

    </div>
  </template>
  
  <style scoped>
  
  </style>