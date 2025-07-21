import React from 'react';
import { IonRow } from '@ionic/react';
import WhoCard from './WhoCard';

interface Who {
  icon: string;
  title: string;
  desc: string;
}

interface WhoSectionProps {
  who: Who[];
}

const WhoSection: React.FC<WhoSectionProps> = ({ who }) => (
  <IonRow className="who-row-equal">
    {who.map((item, idx) => (
      <WhoCard key={idx} icon={item.icon} title={item.title} desc={item.desc} />
    ))}
  </IonRow>
);

export default WhoSection;
