import React from "react";
import "./VideoFeed.css";
import axios from "axios";

import VideoCard from "../videoCard/VideoCard";
import VideoNavBar from "../videoNavBar/VideoNavBar";

class VideoFeed extends React.Component {
  state = {
    videos: [],
    mappedVideos: [],
    videoIndex: 0,
    videosPerLoad: 5,
    toggleDropDown: false,
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
    this.getAllVideos();
    window.addEventListener("scroll", this.handleScroll);
    setTimeout(() => window.scrollTo(0, 0), 1000);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  //I'm doing a basic Axios get call to the local videos file to show a more realistic way of getting data (instead of just importing it).
  //I also typically prefer to define all of my calls in a separate services file.
  getAllVideos = () => {
    axios
      .get("videos.json")
      .then(this.onVideosGetSuccess)
      .then(this.getNextVids)
      .catch(this.onVideosGetError);
  };

  onVideosGetSuccess = data => {
    console.log("Successfully got video data.");
    this.setState({ videos: data.data });
  };

  onVideosGetError = () => {
    console.log("There was an error retrieving video data.");
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

  //Function to get next few videos when scrolling
  getNextVids = () => {
    if (
      this.state.videoIndex < this.state.videos.length

      // this.state.mappedVideos.length <=
      // this.state.videos.length - this.state.videosPerLoad
    ) {
      this.setState(prevState => {
        let videosCopy = [...prevState.videos];
        let nextVideos = videosCopy.splice(
          prevState.videoIndex,
          prevState.videosPerLoad
        );

        let updatedState = { ...prevState };
        updatedState.mappedVideos = updatedState.mappedVideos.concat(
          nextVideos.map(this.mapVideos)
        );

        updatedState.videoIndex += updatedState.videosPerLoad;

        return updatedState;
      });
    }
  };

  //Debouncing to limit rate of on scroll events
  scrollDebounce = (callback, wait) => {
    let timeout = null;
    return (...args) => {
      const next = () => callback(...args);
      clearTimeout(timeout);
      timeout = setTimeout(next, wait);
    };
  };

  handleScroll = this.scrollDebounce(e => {
    if (
      window.innerHeight + window.scrollY >=
      document.getElementById("root").offsetHeight - 200
    ) {
      this.getNextVids();
    }
  }, 100);

  //NavBar UI functions
  showDropDown = () => {
    this.setState({ toggleDropDown: true });
  };

  hideDropDown = () => {
    this.setState({ toggleDropDown: false });
  };

  toggleAutoPlay = () => {
    this.setState(prevState => {
      let updatedVideoOpts = { ...prevState.globalVideoOpts };
      updatedVideoOpts.autoplay = !prevState.globalVideoOpts.autoplay;
      return { globalVideoOpts: updatedVideoOpts };
    });
  };

  toggleAutoLoop = () => {
    this.setState(prevState => {
      let updatedVideoOpts = { ...prevState.globalVideoOpts };
      updatedVideoOpts.loop = !prevState.globalVideoOpts.loop;
      return { globalVideoOpts: updatedVideoOpts };
    });
  };

  toggleMute = () => {
    this.setState(prevState => {
      let updatedVideoOpts = { ...prevState.globalVideoOpts };
      updatedVideoOpts.muted = !prevState.globalVideoOpts.muted;
      return { globalVideoOpts: updatedVideoOpts };
    });
  };

  render() {
    return (
      <React.Fragment>
        <VideoNavBar
          toggleDropDown={this.state.toggleDropDown}
          fadeIn={this.showDropDown}
          fadeOut={this.hideDropDown}
          globalVideoOpts={this.state.globalVideoOpts}
          toggleAutoPlay={this.toggleAutoPlay}
          toggleAutoLoop={this.toggleAutoLoop}
          toggleMute={this.toggleMute}
        />
        <div className="VideoFeed">{this.state.mappedVideos}</div>
      </React.Fragment>
    );
  }
}

export default VideoFeed;
