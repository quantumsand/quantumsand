import React from 'react';
import './CollaborateSidebarOption.css';

export default function CollaborateSidebarOption({ Icon, title, id, addChannelOption }) {

  const selectChannel = () => {
    if (id) {
      // TODO
    }
    console.log("selectChannel");
  }

  const addChannel = () => {
    // TODO
    // Prompt: Please enter the channel name
    console.log("addChannel");
  }

  return (
    <div className="collaborate__sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon className="collaborate__sidebarOptionIcon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="collaborate__sidebarOptionChannel">
          <span className="collaborate__sidebarOptionHash">#</span> {title}</h3>
      )}
    </div>
  )
}
