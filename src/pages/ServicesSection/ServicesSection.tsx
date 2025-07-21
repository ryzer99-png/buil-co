import './ServicesSection.css';
import React from 'react';
import { IonText, IonGrid, IonRow, IonCol } from '@ionic/react';
import { useTranslation } from 'react-i18next';
import GlobeIcon from '../../icons/GlobeIcon';
import GovermentIcon from '../../icons/goverment.svg';
import GenericCard from '../../components/GenericCard';

const Services: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="services" className="features-section">
      <div className="features-container">
        <IonText color="primary-gold">
          <h2 className="features-title">{t('features.title')}</h2>
        </IonText>
        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeMd="6">
              <GenericCard
                icon={<img className='img' src={GovermentIcon} alt="Gobierno y Gobernanza" />}
                title={t('features.feature3.title')}
                description={t('features.feature3.description')}
                color=""
              />
            </IonCol>
            <IonCol size="12" sizeMd="6">
              <GenericCard
                icon={<GlobeIcon />}
                title={t('features.feature1.title')}
                description={t('features.feature1.description')}
                color=""
              />
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </section>
  );
};

export default Services;