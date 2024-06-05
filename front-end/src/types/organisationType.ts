type OrganisationType = {
    id?: number;
    name: string;
    logo: string;
    overview :string;
    websiteURL : string;
    impactURL: string;
    careers: boolean;
    creativeArts: boolean;
    curriculum:boolean;
    lifeSkills : boolean;
    mentalHealth: boolean;
    physicalActivity: boolean;
    pshe:boolean;
    tech: boolean;
    support_areas?: string[];
 };

 export default OrganisationType