import React, { ReactNode } from 'react';
import { IonCard, IonCardContent } from '@ionic/react';

interface ProfileCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  list: ReactNode;
  onClick?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imgSrc, imgAlt, title, list, onClick }) => (
  <IonCard className="userprofiles-card" button={!!onClick} onClick={onClick}>
    <div className="userprofiles-card-header-full">
      {/* Si tienes un icono, reemplaza el img por el componente del icono */}
      {imgSrc ? (
        <img className="userprofiles-card-img-full" src={imgSrc} alt={imgAlt} />
      ) : (
        <div className="userprofiles-card-icon-placeholder" />
      )}
    </div>
    <IonCardContent className="userprofiles-card-content">
      <div className="userprofiles-card-title-content">{title}</div>
      <ul className="userprofiles-card-list">{list}</ul>
    </IonCardContent>
  </IonCard>
);

export default ProfileCard;
