import React from 'react';
import './AVSidebarRow.css';

export default function AVSidebarRow({ Icon, title, selected }) {
  return (
    <div className={`av__sidebarRow ${selected && "selected"}`}>
      <Icon className="av__sidebarRowIcon" />
      <h2 className="av__sidebarRowTitle">{title}</h2>
    </div>
  )
}
