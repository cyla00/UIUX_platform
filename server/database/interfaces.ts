// table USERS
export interface UserInterface {
    stripeId: string,
    id: string,
    hash: string,
    createdAt: string,
    lastLogin: string,
    active: boolean,
    role: string,
    jobTitle: string, // can be null
    seniority: string, // can be null
    industryExperience: Array<string>, // can be null jsonb
    designSpeciality: Array<string>, // can be null jsonb
    emailId: string,
    password: string,
    username: string, // can be null
    firstName: string, // can be null
    lastName: string, // can be null
    country: string, // can be null
    paypalUrl: string, // can be null
    linkedinUrl: string, // can be null
    portfolioId: string, // can be null
    reviewsId: Array<string>, // jsonb
    ratingsId: Array<string>, // jsonb
    projectsId: Array<string>, // jsonb
}

// TABLE projects
interface ClientProjectInterface {
    id: string,
    createdAt: Date,
    active: boolean,
    ownerId: string,
    professionalsId: Array<string>, // list of the IDs of the 3 professionals working on it
    target: string,
    screenType: string, // desktop tablet mobile
    tasks: Array<string>,
    questions: Array<string>,
    specialRequests: string,
    imagePaths: Array<string>, // website pages will become images and will be stored just like normal images
    price: string,
    status: number, // 0 not picked up yet, 1 on going, 2 completed 
}

// table REVIEWS
interface ProReviewInterface {
    id: string,
    createdAt: Date,
    ownerId: string,
    clientId: string,
    note: string,
    severity: number,
    recommendations: string,
}

// the feedback the client will leave to a professional
interface ClientReviewsInterface {
    id: string,
    title: string,
    rating: number,
}

interface PortfolioVerification {
    url: string,
    verified: boolean,
}
