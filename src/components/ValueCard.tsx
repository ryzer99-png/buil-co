import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonIcon } from '@ionic/react';

interface ValueCardProps {
  icon: string;
  title: string;
  desc: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, desc }) => (
  <IonCard className="us-card us-value-card ion-text-center">
    <IonCardHeader>
      <IonIcon icon={icon} className="us-value-icon" color="warning" />
    </IonCardHeader>
    <IonCardContent>
      <h3 className="us-value-title">{title}</h3>
      <p className="us-value-desc">{desc}</p>
    </IonCardContent>
  </IonCard>
);

export default ValueCard;
