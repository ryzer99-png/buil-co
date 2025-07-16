import './PartnersSection.css';
import React from 'react';
import { texts } from '../../constants/constants';

const partners = [
  "https://placehold.co/150x80/e2e8f0/2d3748?text=Partner+1",
  "https://placehold.co/150x80/e2e8f0/2d3748?text=Partner+2",
  "https://placehold.co/150x80/e2e8f0/2d3748?text=Partner+3",
  "https://placehold.co/150x80/e2e8f0/2d3748?text=Partner+4",
  "https://placehold.co/150x80/e2e8f0/2d3748?text=Partner+5",
  "https://placehold.co/150x80/e2e8f0/2d3748?text=Partner+6",
];

const Partners: React.FC = () => (
  <section id="partners" className="partners-section">
    <div className="partners-container">
      <h2 className="partners-title">{texts.partners.title}</h2>
      <div className="partners-carousel-wrapper">
        <div className="partners-carousel-track">
          {[...partners, ...partners].map((src, i) => (
            <div className="partners-carousel-item" key={i}>
              <img src={src} alt={`Partner ${i % partners.length + 1} Logo`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Partners;