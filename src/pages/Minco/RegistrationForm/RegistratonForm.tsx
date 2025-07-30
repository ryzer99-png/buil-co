import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import './RegistrationForm.css';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '../../../routes';

// Define the main App component
const RegistratonForm: React.FC = () => {

  const location = useLocation();
  const history = useHistory();
  const { t } = useTranslation();
  const selectedProfile = (location.state as { profile: string })?.profile;

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [formErrors, setFormErrors] = useState<{
    firstName: boolean;
    lastName: boolean;
    mobile: boolean | string;
    email: boolean;
    password: boolean;
    confirmPassword: boolean;
  }>({
    firstName: false,
    lastName: false,
    mobile: false,
    email: false,
    password: false,
    confirmPassword: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFormErrors(prev => ({ ...prev, [name]: false }));
  };

  function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  return (
    <div className="registration-main font-[Inter] registration-bg">
      {/* Main Content */}
      <div className="registration-content">
        {/* Formulario */}
        <form className="registration-form" onSubmit={e => {
          e.preventDefault();
          // Validate required fields and email
          const errors = {
            firstName: !formData.firstName.trim(),
            lastName: !formData.lastName.trim(),
            mobile: !formData.mobile.trim(),
            email: !formData.email.trim() || !isValidEmail(formData.email),
            password: !formData.password.trim(),
            confirmPassword: !formData.confirmPassword.trim()
          };
          setFormErrors(errors);
          if (Object.values(errors).some(Boolean)) {
            return;
          }
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
            history.push(ROUTES.Welcome);
          }, 4600);
        }}>
          <h2 className="registration-form-title">{t('registration.formTitle')}</h2>
          <div className="registration-form-horizontal">
            <div className="registration-form-col">
              <label htmlFor="account-type" className="registration-label">{t('registration.accountType')}</label>
              <input id="account-type" name="account-type" type="text" value={`${selectedProfile}`} disabled className="registration-input registration-input-disabled" />
              <label htmlFor="mobile-number" className="registration-label">{t('registration.mobile')}</label>
              <input
                id="mobile-number"
                name="mobile"
                type="tel"
                placeholder={t('registration.mobilePlaceholder')}
                className={`registration-input${formErrors.mobile ? ' registration-input-error' : ''}`}
                pattern="[0-9]*"
                inputMode="numeric"
                value={formData.mobile}
                onChange={e => {
                  // Solo permitir números
                  const onlyNums = e.target.value.replace(/[^0-9]/g, '');
                  setFormData(prev => ({ ...prev, mobile: onlyNums }));
                  // Si se ingresó algo no numérico, mostrar error
                  if (e.target.value && /[^0-9]/.test(e.target.value)) {
                    setFormErrors(prev => ({ ...prev, mobile: 'Este campo es numérico' }));
                  } else {
                    setFormErrors(prev => ({ ...prev, mobile: !onlyNums }));
                  }
                }}
              />
              {formErrors.mobile && <div className="registration-error-text">{formErrors.mobile === true ? t('registration.requiredField', 'Este campo no puede estar vacío') : formErrors.mobile}</div>}
              <label htmlFor="first-name" className="registration-label">{t('registration.firstName')}</label>
              <input id="first-name" name="firstName" type="text" className={`registration-input${formErrors.firstName ? ' registration-input-error' : ''}`} value={formData.firstName} onChange={handleInputChange} />
              {formErrors.firstName && <div className="registration-error-text">{t('registration.requiredField', 'Este campo no puede estar vacío')}</div>}
              <label htmlFor="last-name" className="registration-label">{t('registration.lastName')}</label>
              <input id="last-name" name="lastName" type="text" className={`registration-input${formErrors.lastName ? ' registration-input-error' : ''}`} value={formData.lastName} onChange={handleInputChange} />
              {formErrors.lastName && <div className="registration-error-text">{t('registration.requiredField', 'Este campo no puede estar vacío')}</div>}
            </div>
            <div className="registration-form-col">
              <label htmlFor="email" className="registration-label">{t('registration.email')}</label>
              <input id="email" name="email" type="email" className={`registration-input${formErrors.email ? ' registration-input-error' : ''}`} value={formData.email} onChange={handleInputChange} />
              {formErrors.email && <div className="registration-error-text">{t('registration.requiredField', 'Este campo no puede estar vacío')}</div>}
              <label htmlFor="password" className="registration-label">{t('registration.password')}</label>
              <input id="password" name="password" type="password" className={`registration-input${formErrors.password ? ' registration-input-error' : ''}`} value={formData.password} onChange={handleInputChange} />
              {formErrors.password && <div className="registration-error-text">{t('registration.requiredField', 'Este campo no puede estar vacío')}</div>}
              <label htmlFor="confirm-password" className="registration-label">{t('registration.confirmPassword')}</label>
              <input id="confirm-password" name="confirmPassword" type="password" className={`registration-input${formErrors.confirmPassword ? ' registration-input-error' : ''}`} value={formData.confirmPassword} onChange={handleInputChange} />
              {formErrors.confirmPassword && <div className="registration-error-text">{t('registration.requiredField', 'Este campo no puede estar vacío')}</div>}
              <div className="registration-privacy">
                <input type="checkbox" id="privacy-policy" name="privacy-policy" />
                <label htmlFor="privacy-policy" className="registration-label ml-2">{t('registration.privacy')}</label>
              </div>
              <button className="registration-google-btn">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="Google logo" className="registration-google-logo mr-2" />
                {t('registration.google')}
              </button>
              <button type="submit" className="registration-submit">{t('registration.submit')}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistratonForm;
