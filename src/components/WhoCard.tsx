import React from 'react';
import { IonCol } from '@ionic/react';
import ValueCard from './ValueCard';

interface WhoCardProps {
  icon: string;
  title: string;
  desc: string;
}


const WhoCard: React.FC<WhoCardProps> = ({ icon, title, desc }) => (
  <IonCol size="12" sizeMd="4">
    <ValueCard icon={icon} title={title} desc={desc} />
  </IonCol>
);

export default WhoCard;
