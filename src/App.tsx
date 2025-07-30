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
import Contact from './pages/BuilCo/ContactSection/ContactSection';
import WorkWithUs from './pages/BuilCo/WorkWithUsSection/WorkWithUsSection';
import Footer from './pages/BuilCo/Footer/Footer';
import Hero from './pages/BuilCo/HeroSection/HeroSection';
import Header from './pages/BuilCo/MainHeader/MainHeader';
import MenuMobile from './pages/BuilCo/MobileMenu/MobileMenu';
import Partners from './pages/BuilCo/PartnetsSection/PartnersSection';
import Services from './pages/BuilCo/ServicesSection/ServicesSection';
import AboutUs from './pages/BuilCo/AboutUs/AboutUs';
import RegistrationForm from './pages/Minco/RegistrationForm/RegistratonForm';
import UserProfiles from './pages/Minco/UserProfiles/UserProfiles';
import Welcome from './pages/Minco/Welcome/Welcome';
import { ROUTES } from './routes';

// Configura Ionic React
setupIonicReact();


const App = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <IonApp>
      <Router>
        <IonPage id="main-content">
          {isMobile ? (
           <MenuMobile setShowMobileMenu={setShowMobileMenu} />
          ) : (
            <Header />
          )}
          <IonContent>
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
              <Route path={ROUTES.Welcome}>
                <Welcome />
              </Route>
              <Route path={ROUTES.RegistrationForm}>
                <RegistrationForm />
              </Route>
              <Route path={ROUTES.UserProfiles}>
                <UserProfiles />
              </Route>
            </Switch>
          </IonContent>
        </IonPage>
      </Router>
    </IonApp>
  );
};

export default App;