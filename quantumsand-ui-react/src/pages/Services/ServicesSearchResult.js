import React from 'react';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import "./ServicesSearchResult.css";

export default function ServicesSearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  currency,
  period,
  total
}) {
  return (
    <div className="services__searchResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="services__searchResultHeart" />
      <div className="services__searchResultInfo">
        <div className="services__searchResultInfoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>
        <div className="services__searchResultInfoBottom">
          <div className="services__searchResultStars">
            <StarIcon className="services__searchResultStar" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="services__searchResultsPrice">
            <h2>{price} {currency} / {period}</h2>
            <p>{total} {currency}s total</p>
          </div>
        </div>
      </div>
    </div>
  )
}
