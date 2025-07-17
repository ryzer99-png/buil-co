import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton } from '@ionic/react';
import { texts } from '../../constants/constants';
import { ROUTES } from '../../routes';
import './MobileMenu.css';

interface Props {
  setShowMobileMenu: (show: boolean) => void;
}

const MenuMobile: React.FC<Props> = ({ setShowMobileMenu }) => (
  <IonMenu contentId="main-content">
    <IonHeader>
      <IonToolbar className="mobile-menu-toolbar">
        <IonTitle className="mobile-menu-title">{texts.pageTitle}</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList className="mobile-menu-list">
        <IonItem routerLink={ROUTES.SERVICES} detail={false}>
          <IonButton fill="clear" expand="full" className="mobile-menu-btn" onClick={() => setShowMobileMenu(false)}>{texts.navigation.features}</IonButton>
        </IonItem>
        <IonItem routerLink={ROUTES.PARTNERS} detail={false}>
          <IonButton fill="clear" expand="full" className="mobile-menu-btn" onClick={() => setShowMobileMenu(false)}>{texts.navigation.partners}</IonButton>
        </IonItem>
        <IonItem routerLink={ROUTES.CONTACT} detail={false}>
          <IonButton fill="clear" expand="full" className="mobile-menu-btn" onClick={() => setShowMobileMenu(false)}>{texts.navigation.contact}</IonButton>
        </IonItem>
        <IonItem routerLink={ROUTES.WorkWithUs} detail={false}>
          <IonButton color="primary-gold" expand="full" className="mobile-menu-cta-btn" onClick={() => setShowMobileMenu(false)}>{texts.navigation.workWithUs}</IonButton>
        </IonItem>
      </IonList>
    </IonContent>
  </IonMenu>
);

export default MenuMobile;