import React from 'react';

import { texts } from '../constants/constants';

const Partners: React.FC = () => (
  <section id="partners" className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-primary-gold text-2xl md:text-3xl font-extrabold uppercase text-center mb-4 tracking-widest">Partners</h2>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{texts.partners.title}</h2>
      <div className="relative w-full">
        <div className="carousel-track">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="carousel-item">
                <img src="https://placehold.co/150x80/e2e8f0/2d3748?text=Partner+1" alt="Partner 1 Logo" />
              </div>
              <div className="carousel-item">
                <img src="https://placehold.co/150x80/e2e8f0/2d3748?text=Partner+2" alt="Partner 2 Logo" />
              </div>
              <div className="carousel-item">
                <img src="https://placehold.co/150x80/e2e8f0/2d3748?text=Partner+3" alt="Partner 3 Logo" />
              </div>
              <div className="carousel-item">
                <img src="https://placehold.co/150x80/e2e8f0/2d3748?text=Partner+4" alt="Partner 4 Logo" />
              </div>
              <div className="carousel-item">
                <img src="https://placehold.co/150x80/e2e8f0/2d3748?text=Partner+5" alt="Partner 5 Logo" />
              </div>
              <div className="carousel-item">
                <img src="https://placehold.co/150x80/e2e8f0/2d3748?text=Partner+6" alt="Partner 6 Logo" />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Partners;
