import React from "react";
import MedalPlayer from "medal-video-player";
import videos from "../../assets/videos/videos";

class VideoFeed extends React.Component {
  state = {
    videos
  };

  render() {
    return (
      <React.Fragment>
        <MedalPlayer
          content={videos[0]}
          user={videos[0].poster}
          videoOpts={{
            autoplay: false,
            loop: true,
            muted: true,
            controls: true,
            embedded: true,
            retry: true
          }}
        />
      </React.Fragment>
    );
  }
}

export default VideoFeed;
