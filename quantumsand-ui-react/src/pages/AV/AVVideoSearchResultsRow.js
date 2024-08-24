import React from 'react';
import './AVVideoSearchResultsRow.css';

export default function AVVideoSearchResultsRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image
}) {
  return (
    <div className="av__videoSearchResultsRow">
      <img src={image} alt="" />
      <div className="av__videoSearchResultsRowText">
        <h3>{title}</h3>
        <p className="av__videoSearchResultsRowHeadline">
          {channel} · <span className="av__videoSearchResultsSubs">
            <span className="av__videoSearchResultsRowSubsNumber"> {subs}</span> Subscribers
          </span> · {views} views · {timestamp}
        </p>
        <p>{description}</p>
      </div>
    </div>
  )
}
