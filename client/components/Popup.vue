<script setup lang="ts">
interface Props {
    ErrMsg: Array<string>,
    SuccMsg: Array<string>,
}
const props = defineProps<Props>()

watch(() => props, () => {
    if(props.ErrMsg.length > 0){
        setTimeout(() => {
            props.ErrMsg.splice(0, 1)
        }, 3000)
    }
        
    if(props.SuccMsg.length > 0){
        setTimeout(() => {
            props.SuccMsg.splice(0, 1)
        }, 3000)
    }
}, { deep: true })
</script>

<template>
    <Teleport to="body">

        <div class="absolute top-5 right-5"> 
            <Transition name="slide">
                <div class="z-99" v-if="ErrMsg.length > 0">
                    <div v-for="(item, index) in ErrMsg.slice().reverse()" :key="item" class="flex justify-end">
                        <div class="py-1 px-5 bg-red-400 my-1 text-white flex-col">
                            <p><i class='bx align-middle text-xl max-md:text-sm'></i> {{item}}</p>
                        </div>
                    </div>
                </div>
            </Transition>

            <Transition name="slide">
                <div class="z-99" v-if="SuccMsg.length > 0">
                    <div v-for="(item, index) in SuccMsg.slice().reverse()" :key="item" class="flex justify-end">
                        <div class="py-1 px-5 bg-green-400 my-1 text-white flex-col">
                            <p><i class='bx align-middle text-xl max-md:text-sm'></i> {{item}}</p>
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
  transform: translateX(500px);
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in-out;
}
</style>