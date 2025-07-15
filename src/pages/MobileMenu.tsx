import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton } from '@ionic/react';
import { texts } from '../constants/constants';

interface Props {
  setShowMobileMenu: (show: boolean) => void;
}

const MenuMobile: React.FC<Props> = ({ setShowMobileMenu }) => (
  <IonMenu contentId="main-content">
    <IonHeader>
      <IonToolbar color="dark-blue-800">
        <IonTitle>{texts.pageTitle}</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItem routerLink="#caracteristicas" detail={false}>
          <IonButton fill="clear" expand="full" className="ion-text-start" onClick={() => setShowMobileMenu(false)}>{texts.navigation.features}</IonButton>
        </IonItem>
        <IonItem routerLink="#partners" detail={false}>
          <IonButton fill="clear" expand="full" className="ion-text-start" onClick={() => setShowMobileMenu(false)}>{texts.navigation.partners}</IonButton>
        </IonItem>
        <IonItem routerLink="#contacto" detail={false}>
          <IonButton fill="clear" expand="full" className="ion-text-start" onClick={() => setShowMobileMenu(false)}>{texts.navigation.contact}</IonButton>
        </IonItem>
        <IonItem routerLink="#cta" detail={false}>
          <IonButton color="accent-blue" expand="full" onClick={() => setShowMobileMenu(false)}>{texts.navigation.ctaButton}</IonButton>
        </IonItem>
      </IonList>
    </IonContent>
  </IonMenu>
);

export default MenuMobile;
