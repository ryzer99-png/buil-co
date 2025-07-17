import alcaldiaMed from '../assets/alcaldia-medellin.svg';
import creame from '../assets/creame.jpg';
import parqueE from '../assets/parque-e.png';
import camaraBogota from '../assets/camara-bogota.png';
import camaraMed from '../assets/camara-medellin.png';
import cisne from '../assets/cisne-logo.png';
import novira from '../assets/novira-logo.svg';

// Tipos movidos a types.ts
import {
  ConfigInterface,
  PlaceholderImagesInterface,
  TextsInterface,
} from "./types";

// Constantes de textos organizadas por secciones
export const texts: TextsInterface = {
  pageTitle: "Building Connections",

  navigation: {
    features: "Características",
    partners: "Partners",
    contact: "Contacto",
    workWithUs: "Empezar Ahora",
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

// Constantes de configuración adicionales
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
    phone: "+57 314 6000347",
    location: "Medellín - Bogotá, Colombia",
  },
  contactTitle: "Contacto",
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
    "https://placehold.co/150x80/e2e8f0/2d3748?text=Partner+6",
  ],
};

// Exportaciones por defecto y adicionales
export default {
  texts,
  config,
  placeholderImages,
};

// Exportaciones individuales para mayor flexibilidad
export { texts as appTexts };
export { config as appConfig };
export { placeholderImages as appImages };
