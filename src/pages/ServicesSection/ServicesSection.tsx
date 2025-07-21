import './ServicesSection.css';
import React from 'react';
import { IonText, IonCard, IonCardHeader, IonCardContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import { texts } from '../../constants/constants';
import GlobeIcon from '../../icons/GlobeIcon';
import GovermentIcon from '../../icons/goverment.svg';

const Services: React.FC = () => (
  <section id="services" className="features-section">
    <div className="features-container">
      <IonText color="primary-gold">
        <h2 className="features-title">{texts.features.title}</h2>
      </IonText>
      <IonGrid>
        <IonRow>
          <IonCol size="12" sizeMd="6">
            <IonCard className="features-card">
              <IonCardHeader className="features-icon">
                <img className='img' src={GovermentIcon} alt="Gobierno y Gobernanza" />
              </IonCardHeader>
              <IonCardContent>
                <h3>{texts.features.feature3.title}</h3>
                <p>{texts.features.feature3.description}</p>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="12" sizeMd="6">
            <IonCard className="features-card">
              <IonCardHeader className="features-icon">
                <GlobeIcon />
              </IonCardHeader>
              <IonCardContent>
                  <h3>{texts.features.feature1.title}</h3>
                  <p>{texts.features.feature1.description}</p>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  </section>
);

export default Services;