import React from 'react';

interface Props {
  setShowMobileMenu: (show: boolean) => void;
}

const MenuMobile: React.FC<Props> = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    <img src="assets/logo.svg" alt="Logo de la Empresa" style={{ height: '64px' }} />
    <h1 style={{ marginLeft: '10px', fontSize: '24px' }}>Builco</h1>
  </div>
);

export default MenuMobile;