import React from 'react';
import { useLocation } from 'react-router-dom';
import './RegistrationForm.css';

// Define the main App component
const RegistratonForm: React.FC = () => {

  const location = useLocation();
  const selectedProfile = (location.state as { profile: string })?.profile;

  return (
    <div className="registration-main font-[Inter] registration-bg">
      {/* Main Content */}
      <div className="registration-content">
        {/* Login Social */}
        <div className="registration-login">
          <p className="registration-desc">Solo te tomara unos minutos</p>
          <h2 className="registration-title">Inicia sesión con</h2>
          <button className="registration-google-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="Google logo" className="registration-google-logo mr-2" />
            Continua con <b> Google</b>
          </button>
        </div>
        {/* Foto perfil */}
        <div className="registration-photo">
          <label className="registration-photo-label">Foto perfil:</label>
          <div className="registration-photo-circle">
            <svg className="w-16 h-16" fill="#ff9100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <button className="registration-photo-browse">Browse...</button>
        </div>
        {/* Formulario */}
        <form className="registration-form">
          <h2 className="registration-form-title">Formulario de registro</h2>
            <div>
              <label htmlFor="account-type" className="registration-label">Tipo de Cuenta *</label>
              <input id="account-type" name="account-type" type="text" value={`${selectedProfile}`} disabled className="registration-input registration-input-disabled" />
            </div>
            <div>
              <label htmlFor="mobile-number" className="registration-label">Número Móvil *</label>
              <input 
                id="mobile-number" 
                name="mobile-number" 
                type="tel" 
                placeholder="Col (201) 555-0123" 
                className="registration-input registration-input-disabled" 
                pattern="[0-9]*" 
                inputMode="numeric" 
                onInput={e => {
                  const input = e.target as HTMLInputElement;
                  input.value = input.value.replace(/[^0-9]/g, '');
                }}
              />
            </div>
          <div className="form-row">
            <div>
              <label htmlFor="first-name" className="registration-label">Nombres *</label>
              <input id="first-name" name="first-name" type="text" className="registration-input" />
            </div>
            <div>
              <label htmlFor="last-name" className="registration-label">Apellidos *</label>
              <input id="last-name" name="last-name" type="text" className="registration-input" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="registration-label">Correo Electrónico</label>
            <input id="email" name="email" type="email" className="registration-input" />
          </div>
            <div>
              <label htmlFor="password" className="registration-label">Contraseña *</label>
              <input id="password" name="password" type="password" className="registration-input" />
            </div>
            <div>
              <label htmlFor="confirm-password" className="registration-label">Confirmar Contraseña *</label>
              <input id="confirm-password" name="confirm-password" type="password" className="registration-input" />
            </div>
          <div className="registration-privacy">
            <input type="checkbox" id="privacy-policy" name="privacy-policy" />
            <label htmlFor="privacy-policy" className="registration-label ml-2">He leído la política de privacidad</label>
          </div>
      
          <button type="submit" className="registration-submit">Registrarme</button>
        </form>
      </div>
    </div>
  );
};

export default RegistratonForm;
