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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './pages/ContactSection/ContactSection';
import WorkWithUs from './pages/WorkWithUsSection/WorkWithUsSection';
import Footer from './pages/Footer/Footer';
import Hero from './pages/HeroSection/HeroSection';
import Header from './pages/MainHeader/MainHeader';
import MenuMobile from './pages/MobileMenu/MobileMenu';
import Partners from './pages/PartnetsSection/PartnersSection';
import Services from './pages/ServicesSection/ServicesSection';
import AboutUs from './pages/AboutUs/AboutUs';
import { ROUTES } from './routes';

// Configura Ionic React
setupIonicReact();


const App = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <IonApp>
      <Router>
        <MenuMobile setShowMobileMenu={setShowMobileMenu} />
        <IonPage id="main-content">
          <IonContent>
            <Header />
            <Switch>
              <Route exact path={ROUTES.HOME}>
                <Hero />
                <Services />
                <Partners />
                <WorkWithUs />
                <Contact />
                <Footer />
              </Route>
              <Route path={ROUTES.ABOUTUS}>
                <AboutUs />
              </Route>
            </Switch>
          </IonContent>
        </IonPage>
      </Router>
    </IonApp>
  );
};

export default App;