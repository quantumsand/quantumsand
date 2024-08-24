import React from 'react';
import Avatar from "@mui/material/Avatar";
import VerifiedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import './AVChannelRow.css';

export default function AVChannelRow({ image, channel, verified, subs, noOfvideos, description }) {
  return (
    <div className="av__channelRow">
      <Avatar className="av__channelRowLogo"
        alt={channel} src={image} />
      <div className="av__channelRowText">
        <h4>{channel} {verified && <VerifiedIcon />}</h4>
        <p>{subs} subscribers · {noOfvideos} videos</p>
        <p className="av__channelRowDescription">{description}</p>
      </div>
    </div>
  )
}
