import './MainHeader.css';

import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../../i18n';
import DropdownButton from '../../../components/DropdownButtonProps';
import {
  IonButton, IonButtons, IonHeader, IonTitle, IonToolbar
} from '@ionic/react';

import { ROUTES } from '../../../routes';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <IonHeader className="ion-no-border">
      <IonToolbar className="main-header-toolbar">
        <IonTitle>
          <div className="main-header-logo-title">
            <a href="/" className="main-header-logo-link">
              <img
                src="assets/logo.svg"
                alt="Logo de la Empresa"
                className="main-header-logo-img"
              />
            </a>
            <span className="main-header-title-text">
              {t('pageTitle')}
            </span>
          </div>
        </IonTitle>
        <IonButtons slot="end" className="main-header-nav  hide-header-mobile">
          <div className="main-header-lang-switch">
            <button onClick={() => changeLanguage('es')} className="lang-flag-btn" title="Español">
              <img src="https://flagcdn.com/24x18/es.png" alt="Español" width="24" height="18" />
            </button>
            <button onClick={() => changeLanguage('en')} className="lang-flag-btn" title="English">
              <img src="https://flagcdn.com/24x18/gb.png" alt="English" width="24" height="18" />
            </button>
          </div>
          <DropdownButton
            label={t('navigation.us')}
            options={[
              { label: t('us.title'), onClick: () => history.push(ROUTES.ABOUTUS) },
              { label: "Minco", onClick: () => history.push(ROUTES.UserProfiles) },
            ]}
          />
          <IonButton href={ROUTES.HOME_CONTACT_ANCHOR} className="main-header-nav-btn">{t('navigation.contact')}</IonButton>
          <IonButton
            fill='clear'
            href="https://docs.google.com/forms/d/e/1FAIpQLSdSDKnqWue_okq5cmwKBiZ23AAx-3KBpcruY2GUzwaWZZkgOg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="main-header-cta-btn">
            {t('workWithUs.button')}
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;