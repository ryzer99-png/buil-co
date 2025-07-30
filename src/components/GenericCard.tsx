import React from 'react';
import { IonCard, IonCardHeader, IonCardContent } from '@ionic/react';
import { GenericCardProps } from './GenericCardProps';

const GenericCard: React.FC<GenericCardProps> = ({ icon, title, description, color = '', textColor = '', className = '', style }) => {
  const mergedStyle = color ? { ...style, background: color } : style;
  const contentStyle = textColor ? { color: textColor } : {};
  return (
    <IonCard className={`features-card ${className}`} style={mergedStyle}>
      {icon && (
        <IonCardHeader className="features-icon">
          {icon}
        </IonCardHeader>
      )}
      <IonCardContent style={contentStyle}>
        <h3 className="features-card-title">{title}</h3>
        <p>{description}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default GenericCard;
