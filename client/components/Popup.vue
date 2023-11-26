<script setup lang="ts">
interface Props {
    Message: Array<alertMessage>
}
const props = defineProps<Props>()

watch(() => props, () => {
    if(props.Message.length > 0){
        setTimeout(() => {
            props.Message.splice(0, 1)
        }, 2000)
    }
}, { deep: true })

const clickDelete = () => {
    props.Message.splice(0, 1)
}
</script>

<template>
    <Teleport to="body">

        <div class="absolute top-5 left-1/2 transform -translate-x-1/2 max-md:w-full cursor-pointer z-50"> 
            <Transition name="slide">
                <div v-if="Message.length > 0">
                    <div v-for="(item, index) in Message.slice().reverse()" :key="item.type" class="flex justify-end">
                        <div class="bg-opacity-50 border rounded-md wrapper py-2 px-5 text-c-neutral-1000 my-1 flex-col font-semibold max-md:w-full action-effect" @click="clickDelete" :class="{'error': item.type === 'error', 'success': item.type === 'success'}">
                            <p v-if="item.type === 'error'" class="text-c-error-dark"><i class='bx bx-error-circle text-c-error-dark'></i> Error</p> 
                            <p v-if="item.type === 'success'" class="text-c-success-dark"><i class='bx bx-check-circle text-c-success-dark'></i> Success</p>
                            <p class="font-normal">{{item.value}}</p>
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
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.error{
    background-color: #FFE2DF;
    border-color: #ff4733;
}

.success{
    background-color: #CCF8E4;
    border-color: #4be7a1;
}
</style>