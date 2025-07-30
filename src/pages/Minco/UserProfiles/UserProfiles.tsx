import React from 'react';
import './UserProfiles.css';
import ProfileCard from './ProfileCard';
import parse from 'html-react-parser';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import { useTranslation } from 'react-i18next';

const UserProfiles: React.FC = () => {
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <div className="userprofiles-main font-[Inter]">
      <h1 className="userprofiles-title">{t('userprofiles.title')}</h1>
      <main>
        <div className="userprofiles-cards">
          <ProfileCard
            imgSrc="https://images.unsplash.com/photo-1623365545467-d0f2c7ecd677?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imgAlt={t('userprofiles.productor.title')}
            title={t('userprofiles.productor.title')}
            list={<li>{parse(t('userprofiles.productor.desc'))}</li>}
            onClick={() => history.push({ pathname: ROUTES.RegistrationForm, state: { profile: t('userprofiles.productor.title') } })}
          />
          <ProfileCard
            imgSrc="https://plus.unsplash.com/premium_photo-1664298475896-230e7b2c0ddf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imgAlt={t('userprofiles.comercializador.title')}
            title={t('userprofiles.comercializador.title')}
            list={<li>{parse(t('userprofiles.comercializador.desc'))}</li>}
            onClick={() => history.push({ pathname: ROUTES.RegistrationForm, state: { profile: t('userprofiles.comercializador.title') } })}
          />
          <ProfileCard
            imgSrc="https://images.unsplash.com/photo-1662251773377-104e93441427?q=80&w=1708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imgAlt={t('userprofiles.proveedor.title')}
            title={t('userprofiles.proveedor.title')}
            list={<li>{parse(t('userprofiles.proveedor.desc'))}</li>}
            onClick={() => history.push({ pathname: ROUTES.RegistrationForm, state: { profile: t('userprofiles.proveedor.title') } })}
          />
        </div>
      </main>
    </div>
  );
};

export default UserProfiles;