export interface UserInterface {
    stripeId: string,
    id: string,
    createdAt: Date,
    active: boolean,
    role: string,
    email: string,
    password: string,
    username: string,
    firstName: string,
    lastName: string,
    country: string, //optional
    address: string, //optional
    postCode: string, //optional
    paypalUrl: string,
    linkedinUrl: string, //optional
    portfolioUrl: string, //optional
    websiteUrl: string, //optional
    reviews: Array<ProReviewInterface>,
    rating: Array<ClientReviewsInterface>,
    projects: Array<ClientProjectInterface>,
}

// the object the professional will create when placing pings on images
interface ProReviewInterface {
    id: string,
    createdAt: Date,
    ownerId: string,
    clientId: string,
    note: string,
    severity: number,
    recommendations: string,
}

// the object the client will create when creating a project to review
interface ClientProjectInterface {
    id: string,
    createdAt: Date,
    active: boolean,
    ownerId: string,
    professionalsId: Array<string>,
    infoForm: Array<InfoFormInterface>,
    websitePaths: Array<string>,
    imagePaths: Array<string>,
}

// the questions asked while the client creates a project
interface InfoFormInterface {
    id: string,
    createdAt: Date,
    ownerId: string,
    target: string,
    tasks: Array<string>,
    questions: Array<string>,
    specialRequests: string,
}

// the feedback the client will leave to a professional
interface ClientReviewsInterface {
    id: string,
    title: string,
    rating: number,
}