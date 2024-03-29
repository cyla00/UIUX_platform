import axios from 'axios'

export default defineNuxtRouteMiddleware((to, from) => {
    const env = useRuntimeConfig().public

    const hash = to.params.hash

    if(!hash){
        return abortNavigation()
    }
    
    axios.post(`http://localhost:${env.apiPort}/${env.apiBase}/${env.apiVersion}/hash-checker`, {}, {
        headers: {
            Authorization: `${hash}`
        }
    }).catch(e => {
        return abortNavigation()
    })
})