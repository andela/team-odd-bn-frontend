import React from 'react';

const socialButtom = (AUTH_CALLBACK_URL, AUTH_PROVIDER_ICON, alt, text) => (
  <div onClick={() => window.location.href = AUTH_CALLBACK_URL} className="socio-login-btn-link">
    <div className="social-icon"><img src={AUTH_PROVIDER_ICON} alt={alt} /></div>
    <div className="social-name">
      {text}
    </div>
  </div>
);
export default socialButtom;
