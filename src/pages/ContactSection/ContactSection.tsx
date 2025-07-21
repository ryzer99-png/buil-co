import React from 'react';
import { IonIcon, IonText } from '@ionic/react';
import { logoInstagram, logoFacebook, logoLinkedin, mailOutline, pinOutline } from 'ionicons/icons';
import './ContactSection.css';
import { useTranslation } from 'react-i18next';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const logo = t('logo', { returnObjects: true }) as { src: string; alt: string };
  const social = t('social', { returnObjects: true }) as { linkedin: string; instagram: string; facebook: string };
  const contact = t('contact', { returnObjects: true }) as { email: string; location: string };
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <img src={logo.src} alt={logo.alt} className="contact-logo" />
          <IonText color="primary-gold">
            <h2 className="contact-title">{t('pageTitle')}</h2>
          </IonText>
          <IonText>
            <p className="contact-description">
              {t('companyDescription')}
            </p>
          </IonText>
          <div className="contact-social">
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <IonIcon icon={logoInstagram} />
            </a>
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <IonIcon icon={logoLinkedin} />
            </a>
            <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <IonIcon icon={logoFacebook} />
            </a>
          </div>
        </div>
        <div className="contact-details">
          <IonText color="primary-gold">
            <h3 className="contact-subtitle">{t('contactTitle', 'Contacto')}</h3>
          </IonText>
          <ul className="contact-list">
            <li>
              <IonIcon icon={pinOutline} /> {contact.location}
            </li>
            <li>
              <IonIcon icon={mailOutline} /> {contact.email}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;