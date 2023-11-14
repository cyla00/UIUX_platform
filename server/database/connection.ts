import { MongoClient, load } from "../deps.ts"

await load({export: true})
export const databaseConnection = async () => {
    const client = new MongoClient()
    const url = `mongodb://${Deno.env.get("DB_USER")}:${Deno.env.get("DB_PASS")}@${Deno.env.get("DB_HOST")}:${Deno.env.get("DB_PORT")}/?authSource=${Deno.env.get("DB_NAME")}`
    try{
        await client.connect(url)
        console.log('db connected')
        return client.database(`${Deno.env.get('DB_NAME')}`)
    }catch(e){
        throw new Error(`${e}`)
    }
}