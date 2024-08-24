import React from 'react';
import "./MailListSection.css";

export default function MailListSection({ Icon, title, color, selected }) {
  return (
    <div className={`mail__listSection ${selected && "mail__listSectionSelected"}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  )
}
