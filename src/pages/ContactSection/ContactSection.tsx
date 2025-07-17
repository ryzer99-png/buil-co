import React from 'react';
import { IonIcon, IonText } from '@ionic/react';
import { logoInstagram, logoFacebook, logoLinkedin, mailOutline, pinOutline, phonePortrait } from 'ionicons/icons';
import './ContactSection.css';
import { config } from '../../constants/constants';

const ContactSection: React.FC = () => (
  <section className="contact-section" id='contact'>
    <div className="contact-container">
      <div className="contact-info">
        <img src={config.logo.src} alt={config.logo.alt} className="contact-logo" />
        <IonText color="primary-gold">
          <h2 className="contact-title">{config.companyName} {config.companyType}</h2>
        </IonText>
        <IonText>
          <p className="contact-description">
            {config.companyDescription}
          </p>
        </IonText>
        <div className="contact-social">
          <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <IonIcon icon={logoInstagram} />
          </a>
          <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <IonIcon icon={logoLinkedin} />
          </a>
          <a href={config.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <IonIcon icon={logoFacebook} />
          </a>
        </div>
      </div>
      <div className="contact-details">
        <IonText color="primary-gold">
          <h3 className="contact-subtitle">{config.contactTitle}</h3>
        </IonText>
        <ul className="contact-list">
          <li>
            <IonIcon icon={pinOutline} /> {config.contact.location}
          </li>
          <li>
            <IonIcon icon={mailOutline} /> {config.contact.email}
          </li>
          <li>
            <IonIcon icon={phonePortrait} /> {config.contact.phone}
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default ContactSection;