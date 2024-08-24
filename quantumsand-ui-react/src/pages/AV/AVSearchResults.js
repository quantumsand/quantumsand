import React from 'react';
import AVChannelRow from "./AVChannelRow";
import AVVideoSearchResultsRow from './AVVideoSearchResultsRow';
import AVFilters from "./AVFilters";
import './AVSearchResults.css';

export default function AVSearchResults({ channelResults, videoResults }) {
  return (
    <div className="av__searchResults">
      <div className="av__searchResultsFilter">
        <AVFilters />
      </div>
      <hr />
      {channelResults.map((channelResult, index) => (
        <AVChannelRow
          key={channelResult.id}
          image={channelResult.image}
          channel={channelResult.channel}
          verified={channelResult.verified}
          subs={channelResult.subs}
          noOfvideos={channelResult.noOfvideos}
          description={channelResult.description}
          />
      ))}

      {videoResults.map((videoResult, index) => (
        <AVVideoSearchResultsRow
          key={videoResult.id}
          views={videoResult.views}
          subs={videoResult.subs}
          description={videoResult.description}
          timestamp={videoResult.timestamp}
          channel={videoResult.channel}
          title={videoResult.title}
          image={videoResult.image}
        />
      ))}
    </div>
  )
}
