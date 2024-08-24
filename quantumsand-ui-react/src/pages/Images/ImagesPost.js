import React, {useState} from 'react';
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import SendIcon from "@mui/icons-material/Send";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./ImagesPost.css";

export default function ImagesPost({ username, avatar, imageUrl, caption, likes, shares, comments }) {
  // const [comments, setComments] = useState(comments);

  const [comment, setComment] = useState([])

  const postComment = (event) => {
    event.preventDefault();

    /*
      TODO: Post comment to the database backend

      text: comment
    */

    console.log(comment);

    setComment('');
  }

  return (
    <div className="images__post">
      <div className="images__postHeader">
        <Avatar
              className="images__postAvatar"
              alt={username}
              src={avatar}
        />
        <h3>{username}</h3>
      </div>

      <img className="images__postImage" alt=""
           src={imageUrl} />

      <div className="images__postfooter">
        <div className="images__postfooterActions">
          <div className="images__postfooterActionsLeft">
            <FavoriteIcon fontSize="large" />
            <ModeCommentIcon fontSize="large" />
            <SendIcon fontSize="large" />
            <MoreHorizIcon fontSize="large" />
          </div>
          <div className="images__postfooterActionsRight">
            <div className="images__postfooterStat">
              <FavoriteIcon />
              <p>{likes}</p>
            </div>
            <div className="images__postfooterStat">
              <ModeCommentIcon />
              <p>{shares}</p>
            </div>
          </div>
        </div>
      </div>

      <h4 className="images__postText">
        <span className="images__postTextUsername">
          <strong>{username}</strong>
        </span>
        {caption}
      </h4>

      <div className="images__postComments">
        {comments.map((comment) => (
          <p key={comment.id} className="images__postComment">
            <span className="images__postCommentUsername">
              <b>{comment.username}</b>
            </span>{comment.text}
          </p>
        ))}
      </div>

      <form className="images__postCommentBox">
        <input className="images__postCommentInput"
               type="text"
               placeholder="Add a comment..."
               value={comment}
               onChange={(e) => setComment(e.target.value)}
               />
        <button className="images__postCommentButton"
                disabled={!comment}
                type="submit"
                onClick={postComment}
                >Post</button>
      </form>
    </div>
  )
}
