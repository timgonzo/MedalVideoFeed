import React from "react";
import MedalPlayer from "medal-video-player";
import "./VideoCard.css";

const VideoCard = props => {
  return (
    <div className="videocard">
      <MedalPlayer
        content={props.video}
        user={props.video.poster}
        videoOpts={props.videoOpts}
      />
      <div className="card-info">
        <p>
          {props.video.contentTitle} by {props.video.poster.displayName}
        </p>
        <p>
          Views: {props.video.views} Likes: {props.video.likes}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
