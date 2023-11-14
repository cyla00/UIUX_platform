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
  transition: all .2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(.2rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all .5s ease-in-out;
}
.layout-enter-from,
.layout-leave-to {
  transform: translateX(-300px);
  opacity: 0;
  filter: blur(.2rem);
}
</style>