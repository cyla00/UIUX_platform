<template>
    <div>
      <header class="font-bold">
        <NuxtLink to="/pro/settings" class="mr-2 action-effect">settings pro</NuxtLink>
        <NuxtLink to="/pro/audit/123" class="mr-2 action-effect">click me to open project 123</NuxtLink>
        <NuxtLink to="/pro/dashboard" class="mr-2 action-effect">dashboard pro</NuxtLink>

        <NuxtLink to="/" class="mr-2 action-effect">logout pro</NuxtLink>
      </header>
      
      <slot />

    </div>
  </template>
  
  <style scoped>
  
  </style>