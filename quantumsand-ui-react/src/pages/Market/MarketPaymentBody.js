import React from 'react';
import MarketBasketProduct from './MarketBasketProduct';
import MarketOrderTotal from './MarketOrderTotal';
import "./MarketPaymentBody.css";

export default function MarketPaymentBody({ basket, user, address, paymentMethod }) {
  const buy = e => {
    e.preventDefault();
    console.log("Buy");
  }

  return (
    <div className="market__payment">
      <div className="market__paymentContainer">

        <h1>
          Checkout ({basket.totalItems} items)
        </h1>

        <div className="market__paymentSection">
          <div className="market__paymentTitle">
            <h3>Delivery Address</h3>
          </div>
          <div className="market__paymentAddress">
            <p>{user}</p>
            <p>{address.address1}</p>
            <p>{address.address2}</p>
            <p>{address.city}</p>
          </div>
        </div>

        <div className="market__paymentSection">
          <div className="market__paymentTitle">
            <h3>Review items and delivery</h3>
          </div>
          <div className="market__paymentItems">
            {basket.items.map((orderItem, index) => (
              <MarketBasketProduct key={orderItem.id}
                id={orderItem.id}
                title={orderItem.title}
                price={orderItem.price}
                quantity={orderItem.quantity}
                image={orderItem.image}
                rating={orderItem.rating}
                currency={orderItem.currency}
              />
            ))}
          </div>
        </div>

        <div className="market__paymentSection">
          <div className="market__paymentTitle">
            <h3>Payment method</h3>
          </div>
          <div className="market__paymentDetails">
            <p>{paymentMethod.name}</p>
            <MarketOrderTotal totalCurrencies={basket.totalCurrencies} />
            <form>
              <div>
                <button onClick={buy}>Buy Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
