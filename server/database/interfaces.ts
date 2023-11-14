export interface UserInterface {
    stripeId: string,
    id: string,
    createdAt: Date,
    active: boolean,
    role: string,
    email: string,
    password: string,
    firstName: string,
    lastname: string,
    linkedinUrl: string,
    portfolioUrl: string,
    websiteUrl: string,
    reviews: Array<ProReviewInterface>,
    projects: Array<ClientProjectInterface>,
}

interface ProReviewInterface {
    id: string,
    createdAt: Date,
    ownerId: string,
    clientId: string,
    note: string,
    severity: number,
    recommendations: string,
}

interface ClientProjectInterface {
    id: string,
    createdAt: Date,
    active: boolean,
    ownerId: string,
    professionalsId: Array<string>,
    infoForm: Array<InfoFormInterface>,
}

interface InfoFormInterface {
    id: string,
    createdAt: Date,
    ownerId: string,
    target: string,
    tasks: Array<string>,
    questions: Array<string>,
    specialRequests: string,
}