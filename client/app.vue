<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style>
html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
	  font-family: Archivo;
    color: #343A40;
}

i{
  vertical-align: middle;
}

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
  transition: all .1s ease;
}
.layout-enter-from,
.layout-leave-to {
  transform: translateX(-300px);
  opacity: 0;
  filter: blur(.1rem);
}

.shadow{
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
</style>