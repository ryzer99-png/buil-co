import React from 'react';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonContent,
  IonList,
  IonItem,
  IonMenuButton,
  IonButtons,
  IonPage
} from '@ionic/react';

interface Props {
  setShowMobileMenu: (show: boolean) => void;
}

const MenuMobile: React.FC<Props> = ({ setShowMobileMenu }) => (
  <>
    <IonMenu side="start" menuId="main-menu" contentId="main-content" isOpen={true} onIonDidClose={() => setShowMobileMenu(false)}>
      <IonContent className="custom-mobile-menu">
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: 16 }}>
          <button
            onClick={() => setShowMobileMenu(false)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: 32,
              color: '#fff'
            }}
            aria-label="Cerrar menú"
          >
            &times;
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          {/* Logo */}
          <img src="/logo.svg" alt="Builco Logo" style={{ width: 48, height: 48 }} />
          <span style={{ color: '#fff', fontWeight: 'bold', fontSize: 22 }}>Builco</span>
          {/* Idiomas */}
          <div style={{ display: 'flex', gap: 8 }}>
            <img src="/es-flag.png" alt="Español" style={{ width: 32, height: 22 }} />
            <img src="/uk-flag.png" alt="English" style={{ width: 32, height: 22 }} />
          </div>
        </div>
        <div style={{ marginTop: 32 }}>
          <IonList>
            <IonItem button style={{ background: '#232323', borderRadius: 10, margin: '12px 0', color: '#fff', fontWeight: 'bold', justifyContent: 'center', fontSize: 18 }}>
              Inicio
            </IonItem>
            <IonItem button style={{ background: '#232323', borderRadius: 10, margin: '12px 0', color: '#fff', fontWeight: 'bold', justifyContent: 'center', fontSize: 18 }}>
              Acerca de Nosotros
            </IonItem>
            <IonItem button style={{ background: '#232323', borderRadius: 10, margin: '12px 0', color: '#fff', fontWeight: 'bold', justifyContent: 'center', fontSize: 18 }}>
              Mino
            </IonItem>
            <IonItem button style={{ background: '#232323', borderRadius: 10, margin: '12px 0', color: '#fff', fontWeight: 'bold', justifyContent: 'center', fontSize: 18 }}>
              Contacto
            </IonItem>
            <IonItem button style={{ background: '#c7a368', borderRadius: 10, margin: '20px 0 0 0', color: '#fff', fontWeight: 'bold', justifyContent: 'center', fontSize: 18 }}>
              Agenda con nosotros
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonMenu>
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton menu="main-menu" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Contenido principal */}
      </IonContent>
    </IonPage>
  </>
);

export default MenuMobile;