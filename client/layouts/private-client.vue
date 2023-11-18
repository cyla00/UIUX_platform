<template>
    <div>
      <header class="font-bold">
        <NuxtLink to="/client/settings" class="mr-2 action-effect">settings client</NuxtLink>
        <NuxtLink to="/client/dashboard" class="mr-2 action-effect">dashboard client</NuxtLink>

        <NuxtLink to="/" class="mr-2 action-effect">logout client</NuxtLink>
      </header>
      
      <slot />

    </div>
  </template>
  
  <style scoped>
  
  </style>