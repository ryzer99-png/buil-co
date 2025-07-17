import {
  ConfigInterface,
  PlaceholderImagesInterface,
  TextsInterface,
} from "./types";

export const texts: TextsInterface = {
  pageTitle: "Building Connections",

  navigation: {
    features: "Características",
    partners: "Partners",
    contact: "Contacto",
    workWithUs: "Agenda con nosotros",
  },

  hero: {
    title: "Construyendo Conexiones Estratégicas",
    subtitle:
      "Impulsamos empresas con propósito a través de soluciones innovadoras, sostenibles y colaborativas. Conectamos talento, tecnología y visión estratégica para transformar desafíos en oportunidades y convertir a nuestros aliados en líderes de impacto en sus industrias.",
    ctaPrimary: "¡Descubre Más!",
    ctaSecondary: "Ver Partners",
  },

  features: {
    title: "Nuestros servicios",
    feature1: {
      title: "Representación de Impacto",
      description:
        "Ayudamos a organizaciones a expandirse en Latinoamérica y EE. UU., conectándolas con aliados y oportunidades estratégicas para acelerar su impacto.",
    },
    feature2: {
      title: "Consultoría 360",
      description:
        " Ofrecemos consultoría integral (desde estrategia hasta ejecución, incluyendo legal e inteligencia de datos) para generar impacto real y medible a nivel económico, social y ambiental.",
    },
    feature3: {
      title: "Gobierno y Gobernanza.",
      description:
      "Acompañamiento en eltrámite deiniciativas legislativas. Desde su creación hasta su expedición."
    },
  },

  partners: {
    title: "Nuestros Partners",
  },

  workWithUs: {
    title: "Trabajemos Juntos",
    subtitle:
      "¿Listo para potenciar tu impacto? Explora nuevos mercados, forja alianzas estratégicas y transforma tus prácticas. Conéctate con Builco hoy.",
    button: "Agenda con nosotros",
  },

  footer: {
    copyright: "© 2025 Builco S.A.S. BIC. Todos los derechos reservados.",
    privacy: "From 🇨🇴 to 🌎",
    terms: "Términos de Servicio",
  },
};

export const config: ConfigInterface = {
  companyName: "Building Connection",
  companyType: "SAS BIC",
  companyDescription:
    "Impulsar el crecimiento sostenible a través de la representación empresarial con un propósito definido y el desarrollo del mercado",
  logo: {
    src: "/assets/logo.svg",
    alt: "Logo de Buil-Co",
  },
  social: {
    linkedin: "https://linkedin.com/company/builco",
    instagram: "https://www.instagram.com/builco.co/",
    facebook:
      "https://www.facebook.com/people/Builco-Building-Connections/61576676712545/",
  },
  contact: {
    email: "contacto@buil-co.com",
    location: "Medellín - Bogotá, Colombia",
  },
  contactTitle: "Contacto",
};

// Exportaciones por defecto y adicionales
export default {
  texts,
  config,
};

// Exportaciones individuales para mayor flexibilidad
export { texts as appTexts };
export { config as appConfig };
