import './WorkWithUs.css';

import React from 'react';

import { IonButton } from '@ionic/react';

import { useTranslation } from 'react-i18next';

const WorkWithUs: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="workwithus" className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">{t('workWithUs.title')}</h2>
        <p className="cta-subtitle">{t('workWithUs.subtitle')}</p>
        <IonButton
          fill='clear'
          href="https://docs.google.com/forms/d/e/1FAIpQLSdSDKnqWue_okq5cmwKBiZ23AAx-3KBpcruY2GUzwaWZZkgOg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn">
          {t('workWithUs.button')}
        </IonButton>
      </div>
    </section>
  );
};

export default WorkWithUs;
