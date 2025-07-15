
import React from 'react';
import { IonButton } from '@ionic/react';
import { texts } from '../../constants/constants';
import './HeroSection.css';

const Hero: React.FC = () => (
  <section className="hero-section">
    <div className="hero-container">
      <h1 className="hero-title">{texts.hero.title}</h1>
      <p className="hero-subtitle">{texts.hero.subtitle}</p>
      <div className="hero-actions">
        <IonButton href="#cta" color="primary-gold" className="hero-btn">
          {texts.hero.ctaPrimary}
        </IonButton>
        <IonButton href="#caracteristicas" fill="outline" color="primary-gold" className="hero-btn hero-btn-outline">
          {texts.hero.ctaSecondary}
        </IonButton>
      </div>
    </div>
  </section>
);

export default Hero;
