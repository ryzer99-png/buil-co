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
import { IonApp, IonPage, IonContent, setupIonicReact } from '@ionic/react';
import MenuMobile from './pages/MobileMenu';
import Header from './pages/MainHeader';
import Hero from './pages/HeroSection/HeroSection';
import Features from './pages/FeaturesSection';
import Partners from './pages/PartnersSection';
import CTA from './pages/CtaSection';
import Footer from './pages/Footer';

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
          <Features />
          <Partners />
          <CTA />
          <Footer />
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default App;