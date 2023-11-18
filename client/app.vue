<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style>
.action-effect:hover {
    opacity: 50%;
    transition: .2s;
}
.action-effect:active {
    opacity: 100%;
    transition: .1s;
}

.page-enter-active,
.page-leave-active {
  transition: all .1s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(.1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all .2s ease-in-out;
}
.layout-enter-from,
.layout-leave-to {
  transform: translateX(-300px);
  opacity: 0;
  filter: blur(.1rem);
}
</style>