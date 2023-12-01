<script setup lang="ts">
import { authClientForm, loginStatus } from '../store/states'
import { storeToRefs } from 'pinia'

const openForm = authClientForm()
const { openAuthSignClient, openAuthLogClient } = openForm

const logStatus = loginStatus()
const { isLogged, isClient, isDesigner, isModerator } = storeToRefs(logStatus)
const { checkLog } = logStatus

const dashRouter = ref<string>()

const routeChecker = async () => {
  await checkLog()
  if(isClient.value) return dashRouter.value = '/client/dashboard'
  if(isDesigner.value) return dashRouter.value = '/pro/dashboard'
  if(isModerator.value) return dashRouter.value = '/moderation/dashboard'
}
routeChecker()
</script>

<template>
    <div class="w-4/5 m-auto">
      <header class="font-bold grid grid-cols-3 pt-5 text-sm">
        <div class="my-auto mr-auto text-c-neutral-0 border border-c-neutral-500 rounded-full py-2 px-1">
          <NuxtLink to="/" class="mr-2 action-effect p-1 py-2 px-5 bg-c-blue rounded-full">Business</NuxtLink>
          <NuxtLink to="/designers" class="action-effect py-2 px-5 text-c-neutral-1000 rounded-full">UX expert</NuxtLink>
        </div>
        <div class="m-auto">
          <img src="https://fakeimg.pl/64x64" alt="">
        </div>
        <div class="flex justify-end my-auto text-c-neutral-0">
          <NuxtLink :to="dashRouter" v-if="isLogged" class="mr-2 action-effect py-2 px-5 bg-c-orange rounded-lg">dashboard</NuxtLink>
          <button @click="openAuthLogClient" v-if="!isLogged" class="mr-2 action-effect py-2 px-5 text-c-neutral-1000 rounded-lg">Log in</button>
          <button @click="openAuthSignClient" v-if="!isLogged" class="mr-2 action-effect py-2 px-5 bg-c-orange rounded-lg">Start here</button>
        </div>
      </header>
      
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