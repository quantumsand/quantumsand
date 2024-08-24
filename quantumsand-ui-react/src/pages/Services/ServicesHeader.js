import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import "./ServicesHeader.css";

export default function ServicesHeader({ logo, avatar }) {
  return (
    <div className="services__header">
      <img className="services__headerIcon"
           src={logo}
           alt="" />

      <div className="services__headerCenter">
        <input type="text" />
        <SearchIcon />

      </div>

      <div className="services__headerRight">
        <p>List services</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar src={avatar} />
      </div>
    </div>
  )
}
