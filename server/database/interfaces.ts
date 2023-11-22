export interface UserInterface {
    id: string,
    stripe_id: string,
    hash: string,
    created_at: string,
    last_login: string,
    active: boolean,
    role: string,
    job_title: string,
    seniority: string,
    industry_experience: Array<string>,
    design_speciality: Array<string>,
    email: EmailInterface,
    password: string,
    username: string,
    first_name: string,
    last_name: string,
    country: string,
    paypal_url: string,
    linkedin_url: string,
    portfolio: string,
    designer_reviews_id: Array<string>,
    designer_avg_rating: Float32Array,
    client_projects: Array<string>,
}

export interface ClientProjectsInterface{
    id: string,
    ownerId: string,
    createdAt: string,
    active: string,
    designers: Array<string>,
    target: string,
    screenType: ScreenTypesInterface,
    tasks: Array<string>,
    questions: Array<string>,
    specialRequests: string,
    imagePaths: Array<ImagePathInterface>,
    price: Float32Array,
    status: number, 
}
export interface DesignerReviewsInterface{
    id: string,
    ownerId: string,
    projectId: string,
    createdAt: string,
    note: string,
    severity: number,
    recommendations: string,
}
export interface ClientRatingsInterface{
    id: string,
    ownerId: string,
    designerId: string,
    rating: string,
}

// private interfaces
interface EmailInterface {
    value: string,
    verified: boolean
}

interface ScreenTypesInterface{
    type: string,
    size: string
}

interface ImagePathInterface{
    path: string,
    resolution: string
}