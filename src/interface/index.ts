export interface Startup {
  id: string;
  name: string;
  logosrc: string;
  location: string;
  description: string;
  market: {
    type: string;
    icon: React.ReactNode;
  };
  type: {
    name: string;
    icon: React.ReactNode;
  };
  investment: {
    serie: string;
    icon: React.ReactNode;
  };
  founders: Founder[];
  socialLinks: {
    web: string;
    linkedin: string;
    twitter: string;
  };
}

export interface Founder {
  name: string;
  image: string;
}
export interface FounderCards{
  name: string;
  role: string;
  startup: string;
  image: string;
  skills: string[];
  socialLinks: {
    linkedIn?: string;
    twitter?: string;
  };
}

export interface Ventures {
  name: string
  logo: string
  location: string
  investmentStages: string[]
  sectors: string[]
  website: string
}