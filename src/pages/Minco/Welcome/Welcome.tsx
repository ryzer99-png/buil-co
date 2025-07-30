import React from 'react';
import { useTranslation } from 'react-i18next';
import { IonPage, IonContent, IonButton, IonCard, IonCardContent } from '@ionic/react';
import './Welcome.css';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../routes';

const Welcome: React.FC = () => {
    const history = useHistory();
    const { t } = useTranslation();
    const handleStart = () => {
        history.push(ROUTES.UserProfiles);
    };

    return (
        <IonPage className="welcome-page">
            <IonContent className="welcome-content" fullscreen>
                <div className="welcome-container">
                    <IonCard className="welcome-card">
                        <img src="/assets/mino.png" alt="MINO Logo" className="welcome-logo" />
                        <IonCardContent>
                           
                            <p className="welcome-desc">{t('welcome.desc')}</p>
                            <IonButton expand="block" className="welcome-btn" color="warning" onClick={handleStart}>
                                {t('welcome.btn')}
                            </IonButton>
                            <div className="welcome-divider" />
                            <p className="welcome-subdesc">{t('welcome.subdesc')}</p>
                        </IonCardContent>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Welcome;
