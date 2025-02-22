import React from 'react';
import Ratings from 'react-ratings-declarative';
import "./MarketProductCard.css";

export default function MarketProductCard({ id, title, image, currency, slv_price, gld_price, rating, pushEvent }) {
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
         {slv_price && <span><img src="/icons/dirham.svg" alt="" style={{background: "#000", borderRadius: "50%", width: "48px" }} />
          <strong><span style={{paddingLeft: "4px"}}>{slv_price}</span></strong>
          <span className="market__productPriceCurrencyTitle"><small>dirham</small></span></span>}
          {gld_price && <span><img src="/icons/dinar.svg" alt="" style={{background: "#000", borderRadius: "50%", width: "48px" }} />
          <strong><span style={{paddingLeft: "4px"}}>{gld_price}</span></strong>
          <span className="market__productPriceCurrencyTitle"><small>dinar</small></span></span>}
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
