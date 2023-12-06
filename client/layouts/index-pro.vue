<script setup lang="ts">
import { authForm, loginStatus } from '../store/states'
import { storeToRefs } from 'pinia'

const openForm = authForm()
const { openAuthSign, openAuthLog } = openForm

const logStatus = loginStatus()
const { isLogged, isClient, isDesigner, isModerator } = storeToRefs(logStatus)
const { checkLog } = logStatus

const token = useCookie('token')
checkLog(token.value)

const routeChecker = async () => {
  if(isClient.value) {
    await navigateTo('/client/dashboard')
  }
  if(isDesigner.value) {
    await navigateTo('/pro/dashboard')
  }
  if(isModerator.value) {
    await navigateTo('/moderation/dashboard')
  }
}
</script>

<template>
    <div class="">
      <header class="font-bold pt-5 text-sm bg-c-neutral-50">
        <div class="w-4/5 m-auto grid grid-cols-3">
          <div class="my-auto mr-auto text-c-neutral-0 border border-c-neutral-500 rounded-full py-2 px-1">
            <NuxtLink to="/" class="mr-2 action-effect p-1 py-2 px-5 text-c-neutral-1000">Business</NuxtLink>
            <NuxtLink to="/designers" class="action-effect py-2 px-5 bg-c-blue rounded-full">UX expert</NuxtLink>
          </div>
          <div class="m-auto">
            <img src="https://fakeimg.pl/64x64" alt="">
          </div>
          <div class="flex justify-end my-auto text-c-neutral-0">
            <button @click="routeChecker" v-if="isLogged" class="mr-2 action-effect py-2 px-5 bg-c-orange rounded-lg">dashboard</button>
            <button @click="openAuthLog" v-if="!isLogged" class="mr-2 action-effect py-2 px-5 text-c-neutral-1000 rounded-lg">Log in</button>
            <button @click="openAuthSign" v-if="!isLogged" class="mr-2 action-effect py-2 px-5 bg-c-orange rounded-lg">Start here</button>
          </div>
        </div>
        
      </header>

      <DesignerAuthentication/>
      <slot />
  
      <footer class="bg-c-neutral-100 py-10">
        <div class="w-4/5 m-auto">
          <h1>some footer stuff</h1>
          <NuxtLink to="/" class="mr-2 underline action-effect">privacy policy</NuxtLink>
          <NuxtLink to="/" class="mr-2 underline action-effect">Terms and Conditions agreement</NuxtLink>
          <NuxtLink to="/" class="mr-2 underline action-effect">End-User License Agreement (EULA)</NuxtLink>
          <NuxtLink to="/" class="mr-2 underline action-effect">Return and Refund Policy</NuxtLink>
          <NuxtLink to="/" class="mr-2 underline action-effect">Disclaimers</NuxtLink>
        </div>
      </footer>
    </div>
  </template>
  
  <style scoped>
  
  </style>