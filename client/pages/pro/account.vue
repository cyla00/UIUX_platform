<script setup lang="ts">

definePageMeta({
    layout: 'private-pro',
    pageTransition: true,
    middleware: ['auth-checker', 'designer-checker'],
})
const route = useRoute()
const env = useRuntimeConfig().public

const firstName = ref<string>()
const lastName = ref<string>()
const country = ref<string>()
const paypalUrl = ref<string>()
const inkedinUrl = ref<string>()
const portoflioUrl = ref<string>()
const seniorityLevel = ref<string>()

const selectCountry = (event:string) => {
    country.value = event
}
</script>

<template>
    <main class="p-10 w-full overflow-y-scroll">
        <div class="border-b my-5">
            <h2 class="text-xl font-semibold my-5">Account</h2>
        </div>

        <div class="text-sm border-b pb-5 mb-5">
            <div class="text-base mb-10">
                <h3>Update your <span class="font-semibold">payment</span> and <span class="font-semibold">professional experience</span> details.</h3>
            </div>
            <div class="text-base mb-5">
                <h3 class="font-semibold uppercase text-c-orange">payment details</h3>
            </div>
            
            <div class="grid text-start grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1">
                <div class="flex flex-col w-72 max-xl:mb-5 max-md:w-full">
                    <label class="font-semibold mb-2">First name *</label>
                    <input type="text" v-model="firstName" class="outline-none border border-c-neutral-200 py-2 px-5 rounded-md focus:border-c-teal-main duration-200">
                </div>

                <div class="flex flex-col w-72 max-xl:mb-5 max-md:w-full">
                    <label class="font-semibold mb-2">Last name *</label>
                    <input type="text" v-model="lastName" class="outline-none border border-c-neutral-200 py-2 px-5 rounded-md focus:border-c-teal-main duration-200">
                </div>

                <div class="flex flex-col w-72 max-xl:mb-5 max-md:w-full">
                    <CountryDropdown @country="selectCountry"/>
                </div>

                <div class="flex flex-col w-72 max-xl:mb-5 max-md:w-full">
                    <label class="font-semibold mb-2">Paypal email * (to receive payments)</label>
                    <input type="text" v-model="paypalUrl" class="outline-none border border-c-neutral-200 py-2 px-5 rounded-md focus:border-c-teal-main duration-200">
                </div>
            </div>
        </div>

        <div class="text-sm border-b pb-5 mb-5">
            <div class="text-base mb-5">
                <h3 class="font-semibold uppercase text-c-orange">professional experience</h3>
            </div>
            
            <div class="grid text-start grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1">
                <div class="flex flex-col w-72 max-xl:mb-5 max-md:w-full">
                    <label class="font-semibold mb-2">linkedin profile</label>
                    <input placeholder="https://..." type="text" v-model="inkedinUrl" class="outline-none border border-c-neutral-200 py-2 px-5 rounded-md focus:border-c-teal-main duration-200">
                </div>

                <div class="flex flex-col w-72 max-xl:mb-5 max-md:w-full">
                    <label class="font-semibold mb-2">Portfolio or website *</label>
                    <input placeholder="https://..." type="text" v-model="portoflioUrl" class="outline-none border border-c-neutral-200 py-2 px-5 rounded-md focus:border-c-teal-main duration-200">
                </div>

                <div class="flex flex-col w-72 max-xl:mb-5 max-md:w-full">
                    <label class="font-semibold mb-2">Highest seniority level achieved *</label>
                    <select v-model="seniorityLevel" class="outline-none border border-c-neutral-200 py-2 px-5 rounded-md focus:border-c-teal-main duration-200 h-full">
                        <option disabled value="">select your seniotiry level</option>
                        <option value="Senior">Senior</option>
                        <option value="Lead">Lead</option>
                        <option value="Design Manager">Design Manager</option>
                        <option value="Principal">Principal</option>
                        <option value="Director of UX">Director of UX</option>
                        <option value="Head of UX">Head of UX</option>
                        <option value="VP od UX">VP od UX</option>
                        <option value="Chief Experience Officer (CXO)">Chief Experience Officer (CXO)</option>
                    </select>
                </div>
            </div>
        </div>


    </main>
</template>

<style scoped>

</style>