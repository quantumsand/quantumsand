import React from 'react';
import ServicesBanner from './ServicesBanner';
import ServicesCard from "./ServicesCard";
import "./ServicesHome.css";

export default function ServicesHome({ banner, services, crypto}) {
  return (
    <div className="services__home">
      <ServicesBanner wallpaper={banner.wallpaper}
                      title={banner.title}
                      message={banner.message}
                      buttonMessage={banner.buttonMessage} />

      {/* Cards */}
      {services.rows.map((row, index) => (
        <div key={row.id} className="services__homeSection">
          {row.items.map((services, index) => (
            <ServicesCard key={services.id}
              id={services.id}
              title={services.title}
              src={services.image}
              currency={services.currency}
              price={services.price}
              btc_price={services.btc_price}
              crypto={crypto}
              period={services.period}
              rating={services.rating}
              description={services.description} />
          ))}
          </div>
        ))}
    </div>
  )
}
