<script setup lang="ts">

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
</script>

<template>
    <Popup :Message="message"/>
    <main class="p-10 w-full overflow-y-scroll absolute bg-c-neutral-0 h-screen z-30">
        <div class="border-b my-5">
            <h2 class="text-xl font-semibold my-5">Welcome to {{ env.platformName }}!</h2>
            <h3>Please fill in your <span class="font-semibold">payment</span> and <span class="font-semibold">professional experience</span> details below so we:</h3>
            <ul class="list-decimal my-3 ml-10">
                <li>invite you to test digital products that match your experience</li>
                <li>ensure your rewards reach you safely and without delay</li>
            </ul>
            <p class="mb-3">Your details will be used for internal verification purposes only. Your data will never be shared with any third parties. All fields are mandatory.</p>
        </div>

        <div class="text-sm border-b pb-5 mb-5">
            <div class="text-base mb-5">
                <h3 class="font-semibold uppercase text-c-orange">payment details</h3>
            </div>
            
            <div class="grid text-start grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1">
                <div class="flex flex-col w-72 max-xl:mb-5 max-md:w-full">
                    <label class="font-semibold mb-2">First name</label>
                    <input type="text" v-model="firstName" class="outline-none border border-c-neutral-200 py-2 px-5 rounded-md focus:border-c-teal-main duration-200">
                </div>

                <div class="flex flex-col w-72 max-xl:mb-5 max-md:w-full">
                    <label class="font-semibold mb-2">Last name</label>
                    <input type="text" v-model="lastName" class="outline-none border border-c-neutral-200 py-2 px-5 rounded-md focus:border-c-teal-main duration-200">
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

        <div class="text-sm border-b pb-5 mb-5">
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

        <div class="text-sm border-b pb-5 mb-5">
            <div class="grid text-start grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1">
                <div class="flex flex-col w-72 max-xl:mb-5 max-md:w-full">
                    <label class="font-semibold mb-2">Display name</label>
                    <input type="text" v-model="username" class="mb-2 outline-none border border-c-neutral-200 py-2 px-5 rounded-md focus:border-c-teal-main duration-200">
                    <p class="text-xs text-c-neutral-600">This is how others will see and address you. Once you choose a display name, it cannot be changed.</p>
                </div>
            </div>
        </div>

        <div>
            <button @click="saveData" class="action-effect py-2 px-5 bg-c-orange rounded-lg text-c-neutral-0 w-80 max-md:w-full">Save</button>
        </div>

    </main>
</template>

<style scoped>

</style>