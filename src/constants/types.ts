export interface TextsInterface {
  pageTitle: string;
  navigation: {
    features: string;
    us: string;
    contact: string;
    workWithUs: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  features: {
    title: string;
    feature1: {
      title: string;
      description: string;
    };
    feature2: {
      title: string;
      description: string;
    };
    feature3: {
      title: string;
      description: string;
    };
  };
  partners: {
    title: string;
  };
  clients:{
    title: string;
  }
  workWithUs: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    copyright: string;
    privacy: string;
    terms: string;
  };
}

export interface ConfigInterface {
  companyName: string;
  companyType: string;
  companyDescription: string;
  contactTitle: string;
  logo: {
    src: string;
    alt: string;
  };
  social: {
    linkedin: string;
    instagram: string;
    facebook: string;
  };
  contact: {
    email: string;
    location: string;
  };
}

export interface PlaceholderImagesInterface {
  hero: string;
  feature1: string;
  feature2: string;
  feature3: string;
  partners: string[];
}

export type PartnersImages = string[];