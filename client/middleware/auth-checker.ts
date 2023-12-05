import axios from 'axios'

export default defineNuxtRouteMiddleware((to, from) => {
    const env = useRuntimeConfig().public

    const token = useCookie('token')

    if(!token.value){
        return navigateTo('/designers')
    }

    axios.post(`http://localhost:${env.apiPort}/${env.apiBase}/${env.apiVersion}/jwt`, {}, {
        headers: { 
            Authorization: `${token.value}`, 
        }
    }).catch(_ => {
        return navigateTo('/designers')
    })
})