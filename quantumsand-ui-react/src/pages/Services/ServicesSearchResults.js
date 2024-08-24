import React from 'react';
import Button from "@mui/material/Button";
import ServicesSearchResult from "./ServicesSearchResult";
import "./ServicesSearchResults.css";

export default function ServicesSearchResults({ service, noOfServices, startTime, endTime, groupSize, filterButtons, searchResults }) {
  return (
    <div className="services__searchResults">
      <div className="services__searchResultsInfo">
        <p>{noOfServices} {service} • {startTime} to {endTime} • {groupSize} guests</p>
        <h1>{service} nearby</h1>

        {filterButtons.map((filterButton, index) => (
          <Button key={filterButton.id} variant="outlined">{filterButton.name}</Button>
        ))}
      </div>

      {searchResults.map((searchResult, index) => (
        <ServicesSearchResult key={searchResult.id}
          img={searchResult.image}
          location={searchResult.location}
          title={searchResult.title}
          description={searchResult.description}
          star={searchResult.rating}
          price={searchResult.price}
          currency={searchResult.currency}
          period={searchResult.period}
          total={searchResult.total} />
        ))}
    </div>
  )
}
