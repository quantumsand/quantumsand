import React from 'react';
import { Checkbox, IconButton } from "@mui/material";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import "./MailRow.css";

export default function MailRow({ id, title, subject, description, time }) {
  function displayEmail() {
    console.log("Display email")
  }

  return (
    <div key={id} onClick={displayEmail} className="mail__row">
      <div className="mail__rowOptions">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="mail__rowTitle">{title}</h3>
      <div className="mail__rowMessage">
        <h4>{subject}{" "}
          <span className="mail__rowDescription">—
          {description}
          </span>
        </h4>
      </div>
      <p className="mail__rowTime">{time}</p>
    </div>
  )
}
