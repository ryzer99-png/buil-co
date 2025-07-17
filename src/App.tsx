/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';
import './global.css';

import React, { useState } from 'react';

import { IonApp, IonContent, IonPage, setupIonicReact } from '@ionic/react';

import Contact from './pages/ContactSection/ContactSection';
import WorkWithUs from './pages/WorkWithUsSection/WorkWithUsSection';
import Footer from './pages/Footer/Footer';
import Hero from './pages/HeroSection/HeroSection';
import Header from './pages/MainHeader/MainHeader';
import MenuMobile from './pages/MobileMenu/MobileMenu';
import Partners from './pages/PartnetsSection/PartnersSection';
import Services from './pages/ServicesSection/ServicesSection';

// Configura Ionic React
setupIonicReact();


const App = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <IonApp>
      <MenuMobile setShowMobileMenu={setShowMobileMenu} />
      <IonPage id="main-content">
        <IonContent>
          <Header />
          <Hero />
          <Services />
          <Partners />
          <WorkWithUs />
          <Contact />
          <Footer />
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default App;