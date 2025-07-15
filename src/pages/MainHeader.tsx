import { ROUTES } from '../routes';
import React from 'react';

import {
    IonButton, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar
} from '@ionic/react';

import { texts } from '../constants/constants';

const Header: React.FC = () => (
  <IonHeader className="ion-no-border">
    <IonToolbar color="dark-background">
      <IonButtons slot="start">
        <IonMenuButton className="md:hidden" />
      </IonButtons>
          <IonTitle>
      <div className="flex flex-row items-center">
        <a href="#" className="rounded-lg p-2 transition duration-300 flex items-center">
          <img
            src="assets/logo.png"
            alt="Logo de la Empresa"
            className="h-10 w-auto rounded-lg"
          />
        </a>
        <span className="hidden md:block text-2xl font-bold text-primary-gold ml-4">
        {texts.pageTitle}
        </span>
      </div>
    </IonTitle>
      <IonButtons slot="end" className="hidden md:flex space-x-6">
        <IonButton href={ROUTES.FEATURES} className="text-gray-200 hover:text-primary-gold font-medium transition duration-300 rounded-md px-3 py-2">{texts.navigation.features}</IonButton>
        <IonButton href={ROUTES.PARTNERS} className="text-gray-200 hover:text-primary-gold font-medium transition duration-300 rounded-md px-3 py-2">{texts.navigation.partners}</IonButton>
        <IonButton href={ROUTES.CONTACT} className="text-gray-200 hover:text-primary-gold font-medium transition duration-300 rounded-md px-3 py-2">{texts.navigation.contact}</IonButton>
        <IonButton href={ROUTES.CTA} color="primary-gold" className="text-white px-5 py-2 rounded-lg shadow-md hover:bg-primary-gold transition duration-300">{texts.navigation.ctaButton}</IonButton>
      </IonButtons>
    </IonToolbar>
  </IonHeader>
);

export default Header;
