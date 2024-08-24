import React from 'react';
import "./MailSidebarOption.css";

export default function MailSidebarOption({ Icon, title, number, selected }) {
  return (
    <div className={`mail__sidebarOption ${selected && 'mail__sidebarActive'}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  )
}
