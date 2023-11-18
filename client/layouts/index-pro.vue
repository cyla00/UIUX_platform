<template>
    <div>
      <header class="font-bold">
        <NuxtLink to="/" class="mr-2 action-effect">be client</NuxtLink>
        <NuxtLink to="/pro/dashboard" class="mr-2 action-effect">dashboard pro</NuxtLink>
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