import { psql } from "../deps.ts"

export const databaseConnection = async () => {
     
    try{
        const client = new psql.Client({
            user: Deno.env.get('DB_USER'),
            password: Deno.env.get('DB_PASS'),
            database: Deno.env.get('DB_NAME'),
            hostname: Deno.env.get('DB_HOST'),
            port: 5432,
        })
        await client.connect()
        console.log('db connected')
        await client.queryArray(`CREATE TABLE IF NOT EXISTS users (
            id VARCHAR(100) PRIMARY KEY NOT NULL,
            stripe_id VARCHAR(100),
            hash VARCHAR(100) NOT NULL,
            created_at DATE NOT NULL DEFAULT CURRENT_DATE,
            last_login DATE,
            active BOOLEAN NOT NULL,
            role VARCHAR(50) NOT NULL,
            job_title VARCHAR(200),
            seniority VARCHAR(200),
            industry_experience TEXT [],
            design_speciality TEXT [],
            email JSONB, 
            password VARCHAR(200) NOT NULL,
            username VARCHAR(200),
            first_name VARCHAR(200),
            last_name VARCHAR(200),
            country VARCHAR(5),
            paypal_url VARCHAR(200),
            linkedin_url VARCHAR(200),
            portfolio JSONB,
            designer_reviews_id TEXT [],
            designer_avg_rating FLOAT,
            client_projects TEXT []
        );`)

        await client.queryArray(`CREATE TABLE IF NOT EXISTS clientProjects (
            id VARCHAR(100) PRIMARY KEY NOT NULL,
            ownerId VARCHAR(100) NOT NULL,
            createdAt DATE NOT NULL DEFAULT CURRENT_DATE,
            active BOOLEAN NOT NULL,
            designers JSONB,
            target VARCHAR(500) NOT NULL,
            screenType VARCHAR(100) NOT NULL,
            tasks TEXT [] NOT NULL,
            questions TEXT [] NOT NULL,
            specialRequests TEXT [] NOT NULL,
            imagePaths TEXT [] NOT NULL,
            price NUMERIC(6,2) NOT NULL,
            status INTEGER NOT NULL
        );`)

        await client.queryArray(`CREATE TABLE IF NOT EXISTS designerReviews (
            id VARCHAR(100) PRIMARY KEY NOT NULL,
            ownerId VARCHAR(100) NOT NULL,
            projectId VARCHAR(100) NOT NULL,
            createdAt DATE NOT NULL DEFAULT CURRENT_DATE,
            note VARCHAR(500) NOT NULL,
            severity INTEGER NOT NULL,
            recommendations VARCHAR(500) NOT NULL
        );`)

        await client.queryArray(`CREATE TABLE IF NOT EXISTS clientRatings (
            id VARCHAR(100) PRIMARY KEY NOT NULL,
            ownerId VARCHAR(100) NOT NULL,
            designerId VARCHAR(100) NOT NULL,
            rating INTEGER NOT NULL
        );`)
        return client
    }catch(e){
        console.log(e);
        
        throw new Error(`${e}`)
    }
}