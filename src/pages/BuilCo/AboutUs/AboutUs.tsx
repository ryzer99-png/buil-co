import './AboutUs.css';
import {
  bulbOutline, businessOutline, checkmarkCircleOutline, heartOutline, leafOutline,
  peopleCircleOutline, peopleOutline, rocketOutline
} from 'ionicons/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';
import ValuesSection from '../../../components/ValuesSection';
import WhoSection from '../../../components/WhoSection';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  const values = [
    {
      icon: rocketOutline,
      title: t('us.values.0.title'),
      desc: t('us.values.0.desc'),
    },
    {
      icon: heartOutline,
      title: t('us.values.1.title'),
      desc: t('us.values.1.desc'),
    },
    {
      icon: checkmarkCircleOutline,
      title: t('us.values.2.title'),
      desc: t('us.values.2.desc'),
    },
    {
      icon: rocketOutline,
      title: t('us.values.3.title'),
      desc: t('us.values.3.desc'),
    },
    {
      icon: peopleOutline,
      title: t('us.values.4.title'),
      desc: t('us.values.4.desc'),
    },
    {
      icon: bulbOutline,
      title: t('us.values.5.title'),
      desc: t('us.values.5.desc'),
    },
    {
      icon: leafOutline,
      title: t('us.values.6.title'),
      desc: t('us.values.6.desc'),
    },
];

  const who = [
    {
      icon: peopleOutline,
      title: t('us.who.0.title'),
      desc: t('us.who.0.desc'),
    },
    {
      icon: businessOutline,
      title: t('us.who.1.title'),
      desc: t('us.who.1.desc'),
    },
    {
      icon: peopleCircleOutline,
      title: t('us.who.2.title'),
      desc: t('us.who.2.desc'),
    },
  ];

return (
    <IonPage className="us-page">
      <IonContent className="ion-padding us-font">
        <IonGrid className="us-section">
          <IonRow>
            <IonCol size="12">
              <h1 className="us-title">{t('us.title')}</h1>
            </IonCol>
          </IonRow>
          <IonRow className="ion-align-items-center ion-justify-content-between">
            <IonCol size="12" sizeLg="8">
              <div className="us-who-section">
                <h2 className="us-section-header">{t('us.whyTitle')}</h2>
                <div className="us-section-content">
                  <p className="us-value-desc">{t('us.whyText')}</p>
                </div>
                <h2 className="us-section-header us-section-header-margin">{t('us.whoTitle')}</h2>
                <div className="us-section-content">
                  <WhoSection who={who} />
                </div>
              </div>
            </IonCol>
            <img src="/assets/logo.svg" alt="Logo de la Empresa" className="us-logo" />
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <h2 className="us-values-title">{t('us.valuesTitle')}</h2>
            </IonCol>
          </IonRow>
          <ValuesSection values={values} />
        </IonGrid>
        <ContactSection />
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default AboutUs;
