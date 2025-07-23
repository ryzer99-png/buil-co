import './Footer.css';

import React from 'react';

import { IonText } from '@ionic/react';

import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className='footer-copy'>
          <IonText>
            <p>{t('footer.copyright')}</p>
          </IonText>
        </div>
        <div className="footer-links">
          <a className="footer-link">{t('footer.privacy')}</a>
          <a className="footer-link">{t('footer.terms')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;