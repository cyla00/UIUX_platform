<script setup lang="ts">
import { watch } from 'vue';
import { authForm } from '../store/states'

const openForm = authForm()
const { openAuthSign, openAuthLog } = openForm 
</script>

<template>
    <div>
      <header class="font-bold">
        <NuxtLink to="/" class="mr-2 action-effect">become client</NuxtLink>
        <NuxtLink to="/pro/dashboard" class="mr-2 action-effect">dashboard</NuxtLink>
        <button @click="openAuthSign" class="mr-2 action-effect">Sign Up</button>
        <button @click="openAuthLog" class="mr-2 action-effect">Log In</button>
      </header>
      <DesignerAuthentication/>
      <slot />
  
      <footer>
        <NuxtLink to="/" class="mr-2 underline action-effect">privacy policy</NuxtLink>
        <NuxtLink to="/" class="mr-2 underline action-effect">Terms and Conditions agreement</NuxtLink>
        <NuxtLink to="/" class="mr-2 underline action-effect">End-User License Agreement (EULA)</NuxtLink>
        <NuxtLink to="/" class="mr-2 underline action-effect">Return and Refund Policy</NuxtLink>
        <NuxtLink to="/" class="mr-2 underline action-effect">Disclaimers</NuxtLink>
      </footer>
    </div>
  </template>
  
  <style scoped>
  
  </style>