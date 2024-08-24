import React from 'react';
import AVVideoCard from './AVVideoCard';
import AVFilters from "./AVFilters";
import './AVRecommendedVideos.css';

export default function AVRecommendedVideos({ videos, hideFilter = false, hideTitle = false, justifyCenter = false}) {
  return (
    <div className="av__recommendedVideos">
      {!hideTitle && <h2>Recommended</h2>}
      {!hideFilter && <div className="av__recommendedVideosFilter">
        <AVFilters />
      </div>}
      <div className={`av__videoCards ${justifyCenter && `av__videoCards--center`}`}>
        {videos.map((video, index) => (
          <AVVideoCard key={video.id}
            title={video.title}
            views={video.views}
            timestamp={video.timestamp}
            channelImage={video.channelImage}
            channel={video.channel}
            image={video.image}
          />
        ))}

      </div>
    </div>
  )
}
