import React from 'react';
import IconButton from "@mui/material/IconButton";

export default function ChirpPostButton({ Icon, alt }) {
  return (
    <div>
      <IconButton>
        {Icon && <Icon className="chirp__postButton" alt={alt} fontSize="small" />}
      </IconButton>
    </div>
  )
}
