import './PartnersSection.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import alcaldiaMed from '../../../../assets/alcaldia-medellin.svg';
import creame from '../../../../assets/creame.jpg';
import parqueE from '../../../../assets/parque-e.png';
import camaraBogota from '../../../../assets/camara-bogota.png';
import camaraMed from '../../../../assets/camara-medellin.png';
import cisne from '../../../../assets/cisne-logo.png';
import novira from '../../../../assets/novira-logo.svg';

const allPartners = [
  alcaldiaMed,
  creame,
  parqueE,
  camaraBogota,
  camaraMed,
 
];

const clients = [
  cisne,
  novira
];
const partnersLoop = [...allPartners, ...allPartners, ...allPartners, ...allPartners, ...allPartners];
const clientsLoop = [...clients, ...clients, ...clients, ...clients, ...clients];
const Partners: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="partners" className="partners-section">
      <div className="partners-container">
        <h2 className="partners-title">{t('partners.title')}</h2>
        <div className="partners-carousel-wrapper">
          <div className="partners-carousel-track">
            {partnersLoop.map((src, i) => (
              <div className="partners-carousel-item" key={i}>
                <img src={src} alt={`Partner ${((i % allPartners.length) + 1)} Logo`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="partners-container">
        <h2 className="partners-title">{t('clients.title')}</h2>
        <div className="partners-carousel-wrapper">
          <div className="partners-carousel-track">
            {clientsLoop.map((src, i) => (
              <div className="partners-carousel-item" key={i}>
                <img src={src} alt={`Partner ${((i % allPartners.length) + 1)} Logo`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
    
export default Partners;