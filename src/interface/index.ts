export interface Startup {
  id: string;
  name: string;
  logosrc: string;
  location: string;
  description: string;
  marketType: string;
  marketIcon: string;
  typeName: string;
  typeIcon: string;
  investmentSerie: string | null;  // Asegúrate de que sea string | null
  investmentIcon: string | null;   // Cambié de `string | undefined` a `string | null`
  socialWeb: string;
  socialLinkedin: string;
  socialTwitter: string;
  founders: Founder[];
}



export interface Founder {
  id: string;
  name: string;
  image: string;
  startupId: string;
  
}

export interface Persons {
  id: string;
  name: string;
  role: string;
  image: string;
  startup: string;
  Linkedin: string;
  Twitter: string;
}
export interface Ventures {
  name: string;
  logo: string;
  location: string;
  investmentStages: string[];
  sectors: string[];
  website: string;
}
