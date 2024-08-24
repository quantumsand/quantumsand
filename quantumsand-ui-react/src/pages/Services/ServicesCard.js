import React from 'react';
import Ratings from 'react-ratings-declarative';
import "./ServicesCard.css";

export default function ServicesCard({ src, title, description, price, btc_price, crypto, currency, period, rating }) {
  return (
    <div className="services__card">
      <img src={src} alt="" />
      <div className="services__cardInfo">
        <h2>{title}</h2>
        <div className="services__productRating">
          <Ratings
              rating={rating}
              // widgetRatedColors="gold"
              // changeRating={this.changeRating}
            >
              <Ratings.Widget widgetSpacing={"5"} widgetDimension={"25"}/>
              <Ratings.Widget widgetSpacing={"5"} widgetDimension={"25"}/>
              <Ratings.Widget widgetSpacing={"5"} widgetDimension={"25"}/>
              <Ratings.Widget widgetSpacing={"5"} widgetDimension={"25"}/>
              <Ratings.Widget widgetSpacing={"5"} widgetDimension={"25"}/>
          </Ratings>
        </div>
        <h4>{description}</h4>
        <img src={`/icons/${currency}.svg`} alt={currency} />
        <h3>{price} {currency} / {period}</h3>
        {crypto && <div className="services__cardCrypto">
        <img src="/icons/btc.svg" alt="" style={{width: "48px"}} />
        <h3>{btc_price} BTC / {period}</h3></div>}
      </div>
    </div>
  )
}
