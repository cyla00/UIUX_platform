<template>
  <div>
    <header class="font-bold">
        <h1 class="text-c-violet">header</h1>
        <NuxtLink to="/" class="mr-2 action-effect">index</NuxtLink>
        <NuxtLink to="/login" class="mr-2 action-effect">login</NuxtLink>
        <NuxtLink to="/registration" class="mr-2 action-effect">registration</NuxtLink>
        <NuxtLink to="/pro/registration" class="mr-2 action-effect">registration pro</NuxtLink>

        <NuxtLink to="/pro/dashboard" class="mr-2 action-effect">dashboard pro</NuxtLink>
        <NuxtLink to="/dashboard" class="mr-2 action-effect">dashboard</NuxtLink>
    </header>
    
    <slot />

    <footer>
      footer
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