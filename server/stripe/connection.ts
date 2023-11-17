import { Stripe, load } from "../deps.ts"

await load({export: true})
export const StripeConnection = () => {
    let stripe
    try{
        stripe = Stripe(Deno.env.get('STRIPE_API'))
        if(Deno.env.get('STATUS') !== 'production'){
            console.log('stripe connected')
        }
    }catch(e){
        throw new Error(`${e}`)
    }
}