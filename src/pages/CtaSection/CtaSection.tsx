import './CtaSection.css';

import React from 'react';

import { IonButton } from '@ionic/react';

import { texts } from '../../constants/constants';

const CTA: React.FC = () => (
  <section id="cta" className="cta-section">
    <div className="cta-container">
      <h2 className="cta-title">{texts.cta.title}</h2>
      <p className="cta-subtitle">{texts.cta.subtitle}</p>
      <IonButton
        fill='clear'
        href="https://docs.google.com/forms/d/e/1FAIpQLSdSDKnqWue_okq5cmwKBiZ23AAx-3KBpcruY2GUzwaWZZkgOg/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-btn">
        {texts.cta.button}
      </IonButton>
    </div>
  </section>
);

export default CTA;
