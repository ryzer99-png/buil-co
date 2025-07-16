import './Footer.css';

import React from 'react';

import { IonText } from '@ionic/react';

import { texts } from '../../constants/constants';

const Footer: React.FC = () => (
  <footer className="footer-section">
    <div className="footer-container">
      <div className='footer-copy'>
        <IonText>
          <p>{texts.footer.copyright}</p>
        </IonText>
      </div>
      <div className="footer-links">
        <a className="footer-link">{texts.footer.privacy}</a>
        <a className="footer-link">{texts.footer.terms}</a>
      </div>
    </div>
  </footer>
);

export default Footer;