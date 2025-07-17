import './HeroSection.css';
import React from 'react';
import { IonButton } from '@ionic/react';
import { texts } from '../../constants/constants';
import { ROUTES } from '../../routes';


const Hero: React.FC = () => (
  <section className="hero-section">
    <div className="hero-container">
      <h1 className="hero-title">{texts.hero.title}</h1>
      <p className="hero-subtitle">{texts.hero.subtitle}</p>
      <div className="hero-actions">
        <IonButton href={ROUTES.WorkWithUs} className="btn" fill='clear'>{texts.hero.ctaPrimary}</IonButton>
        <IonButton href={ROUTES.PARTNERS} fill="clear" className="btn btn-outline">
          {texts.hero.ctaSecondary}
        </IonButton>
      </div>
    </div>
  </section>
);

export default Hero;
