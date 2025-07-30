import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import './RegistrationForm.css';
import { useTranslation } from 'react-i18next';

// Define the main App component
const RegistratonForm: React.FC = () => {

  const location = useLocation();
  const history = useHistory();
  const { t } = useTranslation();
  const selectedProfile = (location.state as { profile: string })?.profile;

  return (
    <div className="registration-main font-[Inter] registration-bg">
      {/* Main Content */}
      <div className="registration-content">
        {/* Login Social */}
        <div className="registration-login">
          <p className="registration-desc">{t('registration.desc')}</p>
          <h2 className="registration-title">{t('registration.title')}</h2>
          <button className="registration-google-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="Google logo" className="registration-google-logo mr-2" />
            {t('registration.google')}
          </button>
        </div>
        {/* Foto perfil */}
        <div className="registration-photo">
          <label className="registration-photo-label">{t('registration.photo')}</label>
          <div className="registration-photo-circle">
            <svg className="w-16 h-16" fill="#ff9100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <button className="registration-photo-browse">{t('registration.browse')}</button>
        </div>
        {/* Formulario */}
        <form className="registration-form" onSubmit={e => {
          e.preventDefault();
          // Custom alert
          const alertDiv = document.createElement('div');
          alertDiv.className = 'registration-alert-bg';
          alertDiv.innerHTML = `
            <div class="registration-alert">
              <h2 class="registration-alert-title">${t('registration.validationTitle')}</h2>
              <p class="registration-alert-desc">${t('registration.validationDesc')}</p>
            </div>
          `;
          document.body.appendChild(alertDiv);
          setTimeout(() => {
            document.body.removeChild(alertDiv);
            history.push('/');
          }, 4600);
        }}>
          <h2 className="registration-form-title">{t('registration.formTitle')}</h2>
            <div>
              <label htmlFor="account-type" className="registration-label">{t('registration.accountType')}</label>
              <input id="account-type" name="account-type" type="text" value={`${selectedProfile}`} disabled className="registration-input registration-input-disabled" />
            </div>
            <div>
              <label htmlFor="mobile-number" className="registration-label">{t('registration.mobile')}</label>
              <input 
                id="mobile-number" 
                name="mobile-number" 
                type="tel" 
                placeholder={t('registration.mobilePlaceholder')}
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
              <label htmlFor="first-name" className="registration-label">{t('registration.firstName')}</label>
              <input id="first-name" name="first-name" type="text" className="registration-input" />
            </div>
            <div>
              <label htmlFor="last-name" className="registration-label">{t('registration.lastName')}</label>
              <input id="last-name" name="last-name" type="text" className="registration-input" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="registration-label">{t('registration.email')}</label>
            <input id="email" name="email" type="email" className="registration-input" />
          </div>
            <div>
              <label htmlFor="password" className="registration-label">{t('registration.password')}</label>
              <input id="password" name="password" type="password" className="registration-input" />
            </div>
            <div>
              <label htmlFor="confirm-password" className="registration-label">{t('registration.confirmPassword')}</label>
              <input id="confirm-password" name="confirm-password" type="password" className="registration-input" />
            </div>
          <div className="registration-privacy">
            <input type="checkbox" id="privacy-policy" name="privacy-policy" />
            <label htmlFor="privacy-policy" className="registration-label ml-2">{t('registration.privacy')}</label>
          </div>
      
          <button type="submit" className="registration-submit">{t('registration.submit')}</button>
        </form>
      </div>
    </div>
  );
};

export default RegistratonForm;
