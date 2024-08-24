import { Avatar } from '@mui/material';
import React from 'react';
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import ChirpPostButton from "./ChirpPostButton";
import './ChirpPost.css';

export default function ChirpPost({
  id,
  displayName,
  username,
  verified,
  text,
  image,
  avatar
}) {
  return (
    <div className="chirp__post" key={id}>
      <div className="chirp__postAvatar">
        <Avatar src={avatar} />
      </div>
      <div className="chirp__postBody">
        <div className="chirp__postHeader">
          <div className="chirp__postHeaderText">
            <h3>
              {displayName} <span className="chirp__postHeaderSpecial">
                {verified && <VerifiedUserIcon className="chirp__postBadge" />}
                @{username}
              </span>
            </h3>
          </div>
          <div className="chirp__postHeaderDescription">
            <p>
              {text}
            </p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="chirp__postFooter">
          <ChirpPostButton Icon={ChatBubbleOutlineIcon} alt="Comment" />
          <ChirpPostButton Icon={RepeatIcon} alt="Rechirp" />
          <ChirpPostButton Icon={FavoriteBorderIcon} alt="Favourite" />
          <ChirpPostButton Icon={PublishIcon} alt="Share" />
        </div>
      </div>
    </div>
  )
}
