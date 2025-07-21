import './HeroSection.css';
import React from 'react';
import { IonButton } from '@ionic/react';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '../../routes';


const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">{t('hero.title')}</h1>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
        <div className="hero-actions">
          <IonButton href={ROUTES.HOME_WORK_WITH_US_ANCHOR} className="btn" fill='clear'>{t('hero.ctaPrimary')}</IonButton>
          <IonButton href={ROUTES.HOME_PARTNERS_ANCHOR} fill="clear" className="btn btn-outline">
            {t('hero.ctaSecondary')}
          </IonButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
