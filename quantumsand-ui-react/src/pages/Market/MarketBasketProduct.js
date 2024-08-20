import React from 'react';
import "./MarketBasketProduct.css";

export default function MarketBasketProduct({ id, image, title, currency, price, quantity, rating, hideButton }) {
  const removeFromBasket = () => {
    console.log("Remove from basket");
  }

  return (
    <div key={id} className="market__basketProduct">
      <img className="market__basketProductImage" src={image} alt="" />

      <div className="market__basketProductInfo">
        <p className="market__basketProductTitle">{quantity}x {title}</p>
        <p className="market__basketProductPrice">
          <img src={`/images/icons/${currency}.svg`} alt={currency} />
          <strong>{price} </strong>
          <span className="market__backetProductCurrencyTitle"><small>{currency}</small></span>
        </p>
        <div className="market__basketProductRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="rating" key={i}>⭐</span>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from basket</button>
        )}

      </div>
    </div>
  )
}
