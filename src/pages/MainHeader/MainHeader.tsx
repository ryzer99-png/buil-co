import './MainHeader.css';

import React from 'react';

import {
    IonButton, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar
} from '@ionic/react';

import { texts } from '../../constants/constants';
import { ROUTES } from '../../routes';

const Header: React.FC = () => (
  <IonHeader className="ion-no-border">
    <IonToolbar className="main-header-toolbar">
      <IonButtons slot="start">
        <IonMenuButton className="main-header-menu-btn" />
      </IonButtons>
      <IonTitle>
        <div className="main-header-logo-title">
          <a href="#" className="main-header-logo-link">
            <img
              src="assets/logo.svg"
              alt="Logo de la Empresa"
              className="main-header-logo-img"
            />
          </a>
          <span className="main-header-title-text">
            {texts.pageTitle}
          </span>
        </div>
      </IonTitle>
      <IonButtons slot="end" className="main-header-nav">
        <IonButton href={ROUTES.SERVICES} className="main-header-nav-btn">{texts.navigation.features}</IonButton>
        <IonButton href={ROUTES.PARTNERS} className="main-header-nav-btn">{texts.navigation.partners}</IonButton>
        <IonButton href={ROUTES.CONTACT} className="main-header-nav-btn">{texts.navigation.contact}</IonButton>
        <IonButton href={ROUTES.WorkWithUs} className="main-header-cta-btn">{texts.navigation.workWithUs}</IonButton>
      </IonButtons>
    </IonToolbar>
  </IonHeader>
);

export default Header;