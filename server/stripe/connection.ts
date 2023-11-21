import { Stripe, load } from "../deps.ts"

await load({export: true})
export const stripeConnection = async () => {
    try{
        const stripe = await Stripe(`${Deno.env.get('STRIPE_API')}`, { httpClient: Stripe.createFetchHttpClient() })
        if(Deno.env.get('STATUS') !== 'production'){
            console.log('stripe connected')
        }
        return stripe
    }catch(e){
        throw new Error(`${e}`)
    }
}