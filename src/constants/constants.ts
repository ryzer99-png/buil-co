// Tipos movidos a types.ts
import {
    ColorsInterface, ConfigInterface, PlaceholderImagesInterface, TextsInterface
} from './types';

// Constantes de textos organizadas por secciones
export const texts: TextsInterface = {
  pageTitle: "BuilCo",
  
  navigation: {
    features: "Características",
    partners: "Partners", 
    contact: "Contacto",
    ctaButton: "Empezar Ahora"
  },
  
  hero: {
    title: "Construyendo Conexiones Estratégicas",
    subtitle: "Impulsamos empresas con propósito a través de soluciones innovadoras, sostenibles y colaborativas. Conectamos talento, tecnología y visión estratégica para transformar desafíos en oportunidades y convertir a nuestros aliados en líderes de impacto en sus industrias.",
    ctaPrimary: "¡Descubre Más!",
    ctaSecondary: "Ver Características"
  },
  
  features: {
    title: "Nuestros servicios",
    feature1: {
      title: "Representación de Impacto",
      description: "Ayudamos a organizaciones a expandirse en Latinoamérica y EE. UU., conectándolas con aliados y oportunidades estratégicas para acelerar su impacto."
    },
    feature2: {
      title: "Consultoría 360", 
      description: " Ofrecemos consultoría integral (desde estrategia hasta ejecución, incluyendo legal e inteligencia de datos) para generar impacto real y medible a nivel económico, social y ambiental."
    },
    feature3: {
      title: "Componentes Reutilizables",
      description: " Creamos conexiones y colaboraciones auténticas entre organizaciones afines para transformar industrias a través de la innovación, el impacto social y el crecimiento sostenible."
    }
  },
  
  partners: {
    title: "Nuestros Partners"
  },
  
  cta: {
    title: "Trabajemos Juntos",
    subtitle: "¿Listo para potenciar tu impacto? Explora nuevos mercados, forja alianzas estratégicas y transforma tus prácticas. Conéctate con Builco hoy.",
    button: "Agenda con nosotros"
  },
  
  footer: {
    copyright: "© 2025 Builco S.A.S. BIC. Todos los derechos reservados.",
    privacy: "From 🇨🇴 to 🌎",
    terms: "Términos de Servicio"
  }
};

// Constantes de configuración adicionales
export const config: ConfigInterface = {
  companyName: "Buil-Co",
  logo: {
    src: "/assets/logo.png",
    alt: "Logo de Buil-Co"
  },
  social: {
    twitter: "https://twitter.com/builco",
    linkedin: "https://linkedin.com/company/builco", 
    github: "https://github.com/builco"
  },
  contact: {
    email: "contacto@buil-co.com",
    phone: "+34 123 456 789"
  }
};

// Constantes de colores para mantener consistencia
export const colors: ColorsInterface = {
  primary: "#3182ce",
  secondary: "#2c5282", 
  accent: "#4299e1",
  darkBlue900: "#1a365d",
  darkBlue800: "#2c5282",
  lightGray100: "#f7fafc",
  lightGray200: "#edf2f7"
};

// URLs de imágenes placeholder
export const placeholderImages: PlaceholderImagesInterface = {
  hero: "https://placehold.co/800x600/3182ce/ffffff?text=Hero+Image",
  feature1: "https://placehold.co/400x300/f7fafc/2d3748?text=Feature+1",
  feature2: "https://placehold.co/400x300/f7fafc/2d3748?text=Feature+2", 
  feature3: "https://placehold.co/400x300/f7fafc/2d3748?text=Feature+3",
  partners: [
    "https://placehold.co/150x80/e2e8f0/2d3748?text=Partner+1",
    "https://placehold.co/150x80/e2e8f0/2d3748?text=Partner+2",
    "https://placehold.co/150x80/e2e8f0/2d3748?text=Partner+3",
    "https://placehold.co/150x80/e2e8f0/2d3748?text=Partner+4",
    "https://placehold.co/150x80/e2e8f0/2d3748?text=Partner+5",
    "https://placehold.co/150x80/e2e8f0/2d3748?text=Partner+6"
  ]
};

// Exportaciones por defecto y adicionales
export default {
  texts,
  config,
  colors,
  placeholderImages
};

// Exportaciones individuales para mayor flexibilidad
export { texts as appTexts };
export { config as appConfig };
export { colors as appColors };
export { placeholderImages as appImages };