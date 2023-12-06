<script setup lang="ts">
import { loginStatus } from '../store/states'
import { storeToRefs } from 'pinia'
import { jwtDecode } from 'jwt-decode'

const logStatus = loginStatus()
const { isLogged, isClient, isDesigner, isModerator } = storeToRefs(logStatus)
const { logout } = logStatus

</script>

<template>
  <div class="flex h-screen">
    <header class="font-bold flex flex-col py-2 h-full border-r text-c-neutral-800">
      <div class="m-auto">
        <img src="https://fakeimg.pl/54x54" class="rounded-full" alt="">
      </div>

      <div class="bg-c-neutral-100 my-5 h-[1px]"></div>
      
      <div class="text-[10px] text-center grid grid-flow-rows">
        <div class="flex m-2 w-16 h-16">
          <NuxtLink to="/pro/dashboard" exactActiveClass="url-link-style-selection" class="w-full p-2 action-effect m-auto"><span class="material-symbols-outlined">grid_view</span><p>dashboard</p></NuxtLink>
        </div>
        <div class="flex m-2 w-16 h-16">
          <NuxtLink to="/pro/payments" exactActiveClass="url-link-style-selection" class="w-full p-2 action-effect m-auto"><span class="material-symbols-outlined">attach_money</span><p>payments</p></NuxtLink>
        </div>
      </div>

      <div class="m-auto h-full"></div>

      <div class="text-[10px] text-center grid grid-flow-rows">
        <div class="flex m-2 w-16 h-16 relative">
          <NuxtLink to="/pro/account" exactActiveClass="url-link-style-selection" class="w-full p-2 action-effect m-auto"><span class="material-symbols-outlined">account_circle</span><p>account</p></NuxtLink>
        </div>
        <div class="flex m-2 w-16 h-16">
          <NuxtLink to="/pro/help" exactActiveClass="url-link-style-selection" class="w-full p-2 action-effect m-auto"><span class="material-symbols-outlined">help</span><p>help</p></NuxtLink>
        </div>
      </div>

      <div class="bg-c-neutral-100 my-5 h-[1px]"></div>

      <div class="text-[10px] text-center grid grid-flow-rows">
        <div class="flex m-2 w-16 h-16 hover:text-c-error-dark duration-200">
          <button @click="logout" class="w-full p-2 action-effect m-auto"><span class="material-symbols-outlined">logout</span><p>logout</p></button>
        </div>
      </div>
      
    </header>
    
    <slot />

  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>