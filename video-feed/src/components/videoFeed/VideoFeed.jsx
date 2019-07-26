import React from "react";
import VideoCard from "../videoCard/VideoCard";

import videos from "../../assets/videos/videos";
import "./VideoFeed.css";

class VideoFeed extends React.Component {
  state = {
    videos,
    mappedVideos: [],
    videoIndex: 0,
    globalVideoOpts: {
      autoplay: true,
      loop: true,
      muted: true,
      controls: true,
      embedded: true,
      retry: true
    }
  };

  componentDidMount() {
    this.getNextFiveVids(this.state.videos);
  }

  //Function to get next 5 videos from source when scrolling
  getNextFiveVids = videoData => {
    this.setState(prevState => {
      let nextFiveVideos = videoData.slice(this.state.videoIndex, 5);
      let tempMappedVids = [...prevState.mappedVideos];
      tempMappedVids.push(nextFiveVideos.map(this.mapVideos));
      return { mappedVideos: tempMappedVids };
    });
  };

  mapVideos = videoClip => {
    return (
      <VideoCard
        key={videoClip.contentId}
        video={videoClip}
        videoOpts={this.state.globalVideoOpts}
      />
    );
  };

  render() {
    return <div className="VideoFeed">{this.state.mappedVideos}</div>;
  }
}

export default VideoFeed;
