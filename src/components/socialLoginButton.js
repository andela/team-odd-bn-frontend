import React from 'react';
import '../assets/css/socialLogin.scss';

const socialButtom = (AUTH_CALLBACK_URL, AUTH_PROVIDER_ICON, alt, text) => (
  <>
    <a href={AUTH_CALLBACK_URL} className="socio-login-btn-link">
      <div className="socio-log-btn">
        <div className="social-login-auth">
          <img src={AUTH_PROVIDER_ICON} alt={alt} />
          <p>{text}</p>
        </div>
      </div>
    </a>
  </>
);

export default socialButtom;
