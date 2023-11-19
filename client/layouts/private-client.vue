<template>
    <div>
      <header class="font-bold">
        <NuxtLink to="/client/settings" class="mr-2 action-effect">settings</NuxtLink>
        <NuxtLink to="/client/dashboard" class="mr-2 action-effect">dashboard</NuxtLink>

        <NuxtLink to="/" class="mr-2 action-effect">logout</NuxtLink>
      </header>
      
      <slot />

    </div>
  </template>
  
  <style scoped>
  
  </style>