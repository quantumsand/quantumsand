import React from 'react';
import './ChirpSidebarOption.css';

export default function ChirpSidebarOption( { active, text, Icon }) {
  return (
    <div className={`chirp__sidebarOption ${active &&
      'chirp__sidebarOption--optionActive'}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  )
}
