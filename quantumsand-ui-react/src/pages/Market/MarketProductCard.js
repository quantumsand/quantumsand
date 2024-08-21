import React from 'react';
import Ratings from 'react-ratings-declarative';
import "./MarketProductCard.css";

export default function MarketProductCard({ id, title, image, currency, price, btc_price, crypto, rating, pushEvent }) {
  const addToBasket = () => {
    console.log("Add to basket")
    //pushEvent('market-add-to-basket', id);
  }

  const barter = () => {
    console.log("Barter")
    //pushEvent('market-barter', id);
  }

  return (
    <div key={id} className="market__productCard">
      <div className="market__productInfo">
        <p>{title}</p>
        <p className="market__productPrice">
          <img src={`/icons/${currency}.svg`} alt={currency} />
          <strong>{price} </strong>
          <span className="market__productPriceCurrencyTitle"><small>{currency}</small></span>
          {crypto && <span><img src="/icons/btc.svg" alt="" style={{width: "48px", paddingRight: "5px"}} />
          <strong>{btc_price} </strong>
          <span className="market__productPriceCurrencyTitle"><small>BTC</small></span></span>}
        </p>
        <div className="market__productRating">
          <Ratings
            rating={rating}
            widgetRatedColors="gold"
            // changeRating={this.changeRating}
          >
            <Ratings.Widget widgetSpacing={"5"} widgetDimension={"25"}/>
            <Ratings.Widget widgetSpacing={"5"} widgetDimension={"25"}/>
            <Ratings.Widget widgetSpacing={"5"} widgetDimension={"25"}/>
            <Ratings.Widget widgetSpacing={"5"} widgetDimension={"25"}/>
            <Ratings.Widget widgetSpacing={"5"} widgetDimension={"25"}/>
          </Ratings>
        </div>
      </div>

      <img src={image} alt="" />

      <div className="market__productButtons">
        <button onClick={addToBasket}>Add</button>
        <button onClick={barter}>Barter</button>
      </div>
    </div>
  )
}
