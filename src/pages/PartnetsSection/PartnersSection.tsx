import './PartnersSection.css';
import React from 'react';
import { texts } from '../../constants/constants';
import alcaldiaMed from '../../../assets/alcaldia-medellin.svg';
import creame from '../../../assets/creame.jpg';
import parqueE from '../../../assets/parque-e.png';
import camaraBogota from '../../../assets/camara-bogota.png';
import camaraMed from '../../../assets/camara-medellin.png';
import cisne from '../../../assets/cisne-logo.png';
import novira from '../../../assets/novira-logo.svg';

const allPartners = [
  alcaldiaMed,
  creame,
  parqueE,
  camaraBogota,
  camaraMed,
  cisne,
  novira,
];

const partnersLoop = [...allPartners, ...allPartners];

const Partners: React.FC = () => (
  <section id="partners" className="partners-section">
    <div className="partners-container">
      <h2 className="partners-title">{texts.partners.title}</h2>
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
  </section>
);

export default Partners;