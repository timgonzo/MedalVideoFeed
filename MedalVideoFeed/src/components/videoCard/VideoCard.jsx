import React from "react";
import MedalPlayer from "medal-video-player";
import Moment from "moment";
import "./VideoCard.css";

const VideoCard = props => {
  return (
    <div className="videocard">
      <div className="video">
        <MedalPlayer
          content={props.video}
          user={props.video.poster}
          videoOpts={props.videoOpts}
        />
      </div>
      <div className="card-body">
        <div className="clip-info">
          <div className="clip-info-row">
            <p className="clip-title">{props.video.contentTitle}</p>
          </div>
          <div className="clip-info-row">
            <div className="clip-info-sub-col">
              <p className="clip-social-info">
                Views: {props.video.views} - Likes: {props.video.likes}
              </p>
            </div>

            <div className="clip-info-sub-col">
              <p className="clip-post-info">
                Posted on{" "}
                {Moment(props.video.created).format("M/D/YYYY h:mm A")}
              </p>
            </div>
          </div>
        </div>
        <div className="user-info">
          <div className="user-row">
            <div className="user-pic">
              <img
                src={props.video.poster.thumbnail}
                alt="Profile Pic"
                className="rounded"
              />
            </div>
            <div className="user-text">
              <p>
                Play made by: <strong>{props.video.poster.displayName}</strong>
              </p>
              <p>
                "<em>{props.video.poster.slogan}"</em>
              </p>
              <p>
                Followers: {props.video.poster.followers} - Upvotes:{" "}
                {props.video.poster.upvotes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
