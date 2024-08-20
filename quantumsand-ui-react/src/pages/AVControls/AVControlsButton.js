import React from 'react';
import IconButton from "@mui/material/IconButton";

export default function AVControlsButton({ Icon, alt }) {
  return (
    <div>
      <IconButton>
        {Icon && <Icon className="av__controlsButtonIcon" alt={alt} />}
      </IconButton>
    </div>
  )
}
