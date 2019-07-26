import React from "react";
import MedalPlayer from "medal-video-player";

import "./VideoCard.css";

const VideoCard = props => {
  return (
    <div className="videocard">
      {props.video.contentTitle} by {props.video.poster.displayName}
      <MedalPlayer
        content={props.video}
        user={props.video.poster}
        videoOpts={props.videoOpts}
      />
      <span>
        Views: {props.video.views} Likes: {props.video.likes}
      </span>
    </div>
  );
};

export default VideoCard;
