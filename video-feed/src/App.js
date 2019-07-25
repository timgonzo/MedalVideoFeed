import React from "react";
import logo from "./logo.svg";
import "./App.css";

import VideoFeed from "./components/videoFeed/VideoFeed";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <VideoFeed />
    </div>
  );
}

export default App;
