<script setup lang="ts">

definePageMeta({
    layout: 'private-pro',
    pageTransition: true,
    middleware: ['auth-checker', 'designer-checker'],
})

const env = useRuntimeConfig().public

const message = ref<Array<alertMessage>>([])

const firstName = ref<string>()
const lastName = ref<string>()
const country = ref<string>()
const paypalUrl = ref<string>()
const linkedinUrl = ref<string>()
const portoflioUrl = ref<string>()
const seniorityLevel = ref<string>()
const checkedJobTitles = ref<Array<string>>([])
const checkedDomains = ref<Array<string>>([])
const checkedSpecialties = ref<Array<string>>([])
const username = ref<string>()

const password = ref<string>()
const newPassword = ref<string>()
const repeatNewPassword = ref<string>()

const deletePassword = ref<string>()

const jobTitles = ref<Array<string>>([
    'UX Designer',
    'UI Designer',
    'Product Designer',
    'Interaction Designer',
    'Accessibility Specialist',
    'Front end developer',
    'Information Architect',
    'QA tester',
    'Service Designer',
    'Usability Tester',
    'UX Researcher',
    'UX Writer',
])

const domainExperiences = ref<Array<string>>([
    'Banking and Finance',
    'Dating and Relationships',
    'E-Commerce',
    'Education',
    'Entertainment and Streaming',
    'Event Planning and Ticketing',
    'Fitness and Wellness',
    'Food Delivery and Restaurant Services',
    'Healthcare and Telemedicine',
    'Job Search and Recruitment',
    'Messaging and Chat',
    'Real Estate and Property',
    'Software as a Service (SaaS)',
    'Social Media',
    'Subscription Boxes Services',
    'Travel and Tourism',
])

const jobSpecialties = ref<Array<string>>([
    'Accessibility',
    'Content Strategy',
    'Conversion Rate Optimisation',
    'Information Architecture',
    'Interaction Design',
    'Mobile Design',
    'Motion Design',
    'Product Design',
    'Security and privacy',
    'Service design',
    'Usability Testing',
    'User Research',
    'UX Writing',
    'Visual Design',
])

const selectCountry = (event:string) => {
    country.value = event
}


const isCompleted = useCookie('isComplete')
const saveData = async () => {
    const body = {
        first_name: firstName.value,
        last_name: lastName.value,
        country: country.value,
        paypal_url: paypalUrl.value,
        linkedin_url: linkedinUrl.value,
        portfolio: portoflioUrl.value,
        job_title: checkedJobTitles.value,
        seniority: seniorityLevel.value,
        industry_experience: checkedDomains.value,
        design_speciality: checkedSpecialties.value,
        username: username.value,
    }

    // add data request here

    isCompleted.value = null
    message.value = [{type: 'success', value: 'res.data.SuccMsg'}]
    reloadNuxtApp({path: "/pro/dashboard"})
}

const changePassword = async () => {

}
const deleteAccount = async () => {

}
</script>

<template>
    <main class="p-10 w-full overflow-y-scroll bg-c-neutral-0 h-screen z-30">
    <Popup :Message="message"/>
        <div class="border-b my-5">
            <h2 class="text-xl font-semibold my-5">Account</h2>
            <p class="mb-3">Update your <span class="font-semibold">payment</span> and <span class="font-semibold">professional experience</span> details.</p>
        </div>

        <div class="text-sm border-b pb-5 mb-5">
            <div class="text-base mb-5">
                <h3 class="font-semibold uppercase text-c-orange">payment details</h3>
            </div>
            
            <div class="grid text-start grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1">
                <div class="flex flex-col w-72 max-xl:mb-5 max-md:w-full">
                    <label class="font-semibold mb-2">First name</label>
                    <input readonly type="text" v-model="firstName" class="outline-none border border-c-neutral-200 py-2 px-5 rounded-md focus:border-c-teal-main duration-200">
                </div>

                <div class="flex flex-col w-72 max-xl:mb-5 max-md:w-full">
                    <label class="font-semibold mb-2">Last name</label>
                    <input readonly type="text" v-model="lastName" class="outline-none border border-c-neutral-200 py-2 px-5 rounded-md focus:border-c-teal-main duration-200">
                </div>

                <div class="flex flex-col w-72 max-xl:mb-5 max-md:w-full">
                    <CountryDropdown @country="selectCountry"/>
                </div>

                <div class="flex flex-col w-72 max-xl:mb-5 max-md:w-full">
                    <label class="font-semibold mb-2">Paypal email (to receive payments)</label>
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
                    <input placeholder="https://..." type="text" v-model="linkedinUrl" class="outline-none border border-c-neutral-200 py-2 px-5 rounded-md focus:border-c-teal-main duration-200">
                </div>

                <div class="flex flex-col w-72 max-xl:mb-5 max-md:w-full">
                    <label class="font-semibold mb-2">Portfolio or website</label>
                    <input placeholder="https://..." type="text" v-model="portoflioUrl" class="outline-none border border-c-neutral-200 py-2 px-5 rounded-md focus:border-c-teal-main duration-200">
                </div>

                <div class="flex flex-col w-72 max-xl:mb-5 max-md:w-full">
                    <label class="font-semibold mb-2">Highest seniority level achieved</label>
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

        <div class="text-sm border-b pb-5 mb-5">
            <div class="text-base mb-5">
                <h3 class="font-semibold uppercase text-c-orange">Current job title</h3>
            </div>
            <div class="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1">
                <div v-for="i in jobTitles" :key="i" class="mb-5">
                    <input type="checkbox" :value="i" v-model="checkedJobTitles" class="mr-2 text-base">
                    <label :for="i">{{ i }}</label>
                </div>
            </div>
        </div>

        <div class="text-sm border-b pb-5 mb-5">
            <div class="text-base mb-5">
                <h3 class="font-semibold uppercase text-c-orange">Domain experience</h3>
            </div>
            <div class="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1">
                <div v-for="i in domainExperiences" :key="i" class="mb-5">
                    <input type="checkbox" :value="i" v-model="checkedDomains" class="mr-2 text-base">
                    <label :for="i">{{ i }}</label>
                </div>
            </div>
        </div>

        <div class="text-sm pb-5 mb-5">
            <div class="text-base mb-5">
                <h3 class="font-semibold uppercase text-c-orange">Speciality</h3>
            </div>
            <div class="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1">
                <div v-for="i in jobSpecialties" :key="i" class="mb-5">
                    <input type="checkbox" :value="i" v-model="checkedSpecialties" class="mr-2 text-base">
                    <label :for="i">{{ i }}</label>
                </div>
            </div>
        </div>

        <div class="border-b pb-5 mb-5">
            <div class="w-80 max-md:w-full text-center">
                <button @click="saveData" class="action-effect py-2 px-5 bg-c-teal-main rounded-lg text-c-neutral-0 w-full mb-2">Save changes</button>
                <p class="text-sm text-c-neutral-600">Your data is safe with us.</p>
            </div>
        </div>
        


        <div class="text-sm pb-5 mb-5">
            <div class="text-base mb-5">
                <p class="my-10 text-xl">Change your <span class="font-semibold">password</span> and <span class="font-semibold">delete</span> your account.</p>
                <h3 class="font-semibold uppercase text-c-orange">Change password</h3>
            </div>
            
            <div class="grid text-start grid-cols-1">
                <div class="flex flex-col w-72 mb-5 max-md:w-full">
                    <label class="font-semibold mb-2">Current Password</label>
                    <input type="password" v-model="password" class="outline-none border border-c-neutral-200 py-2 px-5 rounded-md focus:border-c-teal-main duration-200">
                </div>

                <div class="flex flex-col w-72 mb-5 max-md:w-full">
                    <label class="font-semibold mb-2">New password</label>
                    <input type="password" v-model="newPassword" class="outline-none border border-c-neutral-200 py-2 px-5 rounded-md focus:border-c-teal-main duration-200">
                    <p class="text-xs text-c-neutral-600">At least 8 characters, one uppercase, one lowercase and one special symbol (like !@#$%^)</p>
                </div>

                <div class="flex flex-col w-72 mb-5 max-md:w-full">
                    <label class="font-semibold mb-2">Confirm new password</label>
                    <input type="password" v-model="repeatNewPassword" class="outline-none border border-c-neutral-200 py-2 px-5 rounded-md focus:border-c-teal-main duration-200">
                </div>
            </div>
        </div>

        <div class="border-b pb-5 mb-5">
            <div class="w-80 max-md:w-full text-center">
                <button @click="changePassword" class="action-effect py-2 px-5 bg-c-teal-main rounded-lg text-c-neutral-0 w-full mb-2">Change password</button>
            </div>
        </div>


        <div class="text-sm pb-5 mb-5">
            <div class="text-base mb-5">
                <h3 class="font-semibold uppercase text-c-orange mb-3">Delete account</h3>
                <p class="mb-3">Deleting your account will remove all of your information from our database. This cannot be undone.</p>
            </div>
            
            <div class="grid text-start grid-cols-1">
                <div class="flex flex-col w-72 mb-5 max-md:w-full">
                    <label class="font-semibold mb-2">Current Password</label>
                    <input type="password" v-model="deletePassword" class="outline-none border border-c-neutral-200 py-2 px-5 rounded-md focus:border-c-teal-main duration-200">
                </div>
            </div>
        </div>

        <div class="pb-5 mb-5">
            <div class="w-80 max-md:w-full text-center">
                <button @click="deleteAccount" class="action-effect py-2 px-5 bg-c-orange rounded-lg text-c-neutral-0 w-full mb-2">Delete account</button>
            </div>
        </div>

    </main>
</template>

<style scoped>

</style>