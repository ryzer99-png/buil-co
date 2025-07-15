// Modelos de datos y tipos para la app

export interface TextsInterface {
  pageTitle: string;
  navigation: {
    features: string;
    partners: string;
    contact: string;
    ctaButton: string;
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
  cta: {
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
  logo: {
    src: string;
    alt: string;
  };
  social: {
    twitter: string;
    linkedin: string;
    github: string;
  };
  contact: {
    email: string;
    phone: string;
  };
}

export interface ColorsInterface {
  primary: string;
  secondary: string;
  accent: string;
  darkBlue900: string;
  darkBlue800: string;
  lightGray100: string;
  lightGray200: string;
}

export interface PlaceholderImagesInterface {
  hero: string;
  feature1: string;
  feature2: string;
  feature3: string;
  partners: string[];
}
