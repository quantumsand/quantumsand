import React, { useState } from 'react';
import { Button } from "@mui/material";
import ServicesSearch from './ServicesSearch';
import "./ServicesBanner.css";

export default function ServicesBanner({ wallpaper, title, message, buttonMessage }) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div style={{ backgroundImage: `url(${wallpaper})`, backgroundPosition: "center center", position: "relative"}}>
      <div className="services__bannerSearch">
        {showSearch && <ServicesSearch overlay />}
        <Button onClick={() => setShowSearch(!showSearch)}
        className="services__bannerSearchButton" variant="outlined">
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="services__bannerInfo">
        <h1>{title}</h1>
        <h5>
          {message}
        </h5>
        <Button variant="outlined">{buttonMessage}</Button>
      </div>
    </div>
  )
}
