<script setup lang="ts">
interface Props {
    Message: Array<alertMessage>
}
const props = defineProps<Props>()

watch(() => props, () => {
    if(props.Message.length > 0){
        setTimeout(() => {
            props.Message.splice(0, 1)
        }, 4000)
    }
}, { deep: true })
</script>

<template>
    <Teleport to="body">

        <div class="absolute bottom-5 right-5"> 
            <Transition name="slide">
                <div class="z-50" v-if="Message.length > 0">
                    <div v-for="(item, index) in Message.slice().reverse()" :key="item.type" class="flex justify-end">
                        <div class="rounded-md wrapper py-2 px-5 text-c-neutral-0 my-1 flex-col font-semibold" :class="{'error': item.type === 'error', 'success': item.type === 'success'}">
                            <p><i class='align-middle text-xl max-md:text-sm'></i> {{item.value}}</p>
                        </div>
                    </div>
                </div>
            </Transition>
        </div> 

    </Teleport>
</template>

<style scoped>

.slide-enter-from,
.slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease-in-out;
}
.wrapper{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
.error{
    background-color: #f44336;
}

.success{
    background-color: #66bb6a;
}
</style>