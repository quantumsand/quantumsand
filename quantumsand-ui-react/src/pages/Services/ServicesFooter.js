import React from 'react';
import "./ServicesFooter.css";

export default function ServicesFooter({ logo, footerMessage }) {
  return (
    <div className="services__footer">
      <img className="services__footerLogo" src={logo} alt="" />
      <p>{footerMessage}</p>
    </div>
  )
}
