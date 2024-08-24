import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import "./ChirpWidgets.css";

export default function ChirpWidgets() {
  return (
    <div className="chirp__widgets">
      <div className="chirp__widgetsInput">
        <SearchIcon className="chirp__widgetsSearchIcon" />
        <input placeholder="Search" type="text" />
      </div>

      <div className="chirp__widgetsWidgetContainer">
        <h2>What's happening</h2>
      </div>
    </div>
  )
}
