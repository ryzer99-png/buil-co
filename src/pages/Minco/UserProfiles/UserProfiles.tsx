import React from 'react';
import './UserProfiles.css';
import ProfileCard from './ProfileCard';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../routes';

const UserProfiles: React.FC = () => {
  const history = useHistory();

  return (
    <div className="userprofiles-main font-[Inter]">
      <h1 className="userprofiles-title">Regístrate seleccionando el gremio al que perteneces</h1>
      <main>
        <div className="userprofiles-cards">
          <ProfileCard
            imgSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400&q=80"
            imgAlt="Productor Minero"
            title="Productor Minero"
            list={
              <>
                <li><b>Cotiza y publica minerales gratis</b> conectando directamente con compradores y proveedores en Latinoamérica a través del sistema "Match".</li>
              </>
            }
            onClick={() => history.push({ pathname: ROUTES.RegistrationForm, state: { profile: 'Productor Minero' } })}
          />
          <ProfileCard
            imgSrc="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=400&q=80"
            imgAlt="Comercializador de Minerales y/o Minas"
            title="Comercializador de Minerales y/o Minas"
            list={
              <>
                <li><b>Adquiere minerales directamente de mineros confiables</b> publica ofertas de compra o minas en venta/inversión, con notificaciones del sistema "Match".</li>
              </>
            }
            onClick={() => history.push({ pathname: ROUTES.RegistrationForm, state: { profile: 'Comercializador de Minerales y/o Minas' } })}
          />
          <ProfileCard
            imgSrc="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&h=400&q=80"
            imgAlt="Proveedor de Productos y Servicios"
            title="Proveedor de Productos & Servicios para la Industria Minera."
            list={
              <>
                <li><b>Maximiza tu negocio y expande tu alcance</b> conectándote con millones de mineros en Latinoamérica a través de este ecosistema especializado.</li>
              </>
            }
            onClick={() => history.push({ pathname: ROUTES.RegistrationForm, state: { profile: 'Proveedor de Productos & Servicios para la Industria Minera.' } })}
          />
        </div>
      </main>
    </div>
  );
};

export default UserProfiles;