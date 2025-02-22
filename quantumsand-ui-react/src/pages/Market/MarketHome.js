import React from 'react';
import MarketProductCard from "./MarketProductCard";
import "./MarketHome.css";

export default function MarketHome({ hero, products, pushEvent }) {
  return (
    <div className="market__home">

      <div className="market__homeContainer">

        <img className="market__homeImage"
          src={hero}
          alt=""
        />

        {products.rows.map((row, index) => (
          <div key={row.id} className="market__homeRow">
            {row.items.map((product, index) => (
              <MarketProductCard pushEvent={pushEvent}
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                currency={product.currency}
                slv_price={product.slv_price}
                gld_price={product.gld_price}
                rating={product.rating} />
            ))}
          </div>
        ))}

      </div>
    </div>
  )
}
