import { jwtDecode } from "jwt-decode"

export default defineNuxtRouteMiddleware((to, from) => {
    
    const token = useCookie('token')
    const raw = jwtDecode(token.value)

    if(raw.role !== 'designer'){
        return abortNavigation()
    }
})