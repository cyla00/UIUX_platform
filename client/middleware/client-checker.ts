import { jwtDecode } from "jwt-decode"

export default defineNuxtRouteMiddleware((to, from) => {
    const env = useRuntimeConfig().public

    const token = useCookie('token')
    const raw = jwtDecode(token.value)

    if(raw.role !== 'client'){
        return abortNavigation()
    }
})