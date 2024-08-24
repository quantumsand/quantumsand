import React from 'react';
import PeopleIcon from "@mui/icons-material/People";
import { Button } from "@mui/material";
import "./ServicesSearch.css";

export default function ServicesSearch({ overlay = false} ) {
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

  // const selectionRange = {
  //   startDate: startDate,
  //   endDate: endDate,
  //   key: "selection"
  // };

  // function handleSelect(ranges) {
  //   setStartDate(ranges.selection.startDate);
  //   setEndDate(ranges.selection.endDate);
  // }

  return (
    <div className={`services__search ${overlay ? `services__searchOverlay` : `services__debug`} `}>
      {
        /*
          TODO: Add a date picker.
        */
      }
      <h2>
        Requirements
        <PeopleIcon />
      </h2>
      {
        /*
          TODO: Add search requirement selections.
        */
      }
      <Button>Search Services</Button>
    </div>
  )
}
