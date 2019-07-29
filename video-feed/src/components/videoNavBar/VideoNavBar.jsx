import React from "react";
import "./VideoNavBar.css";
import "../../assets/css/nucleo-icons.css";
import logo from "../../assets/img/brandActive.png";

const VideoNavBar = props => {
  return (
    <div className="fixed-top">
      <nav class="navbar">
        <img
          src={logo}
          alt="Medal.TV Logo"
          className="nav-logo"
          onClick={() => window.open("https://medal.tv/")}
        />
        <div className="main-nav" id="js-menu">
          <div className="navbar-toggle" onMouseLeave={() => props.fadeOut()}>
            <p className="settings-header" onMouseOver={() => props.fadeIn()}>
              Global Video Settings{" "}
              <i className="tim-icons icon-settings-gear-63 icons" />
            </p>
            {/*If drop-down visiblity prop is true, fade to visible element*/}
            {props.toggleDropDown ? (
              <div
                className="dropdown-content fade-in"
                onMouseLeave={() => props.fadeOut()}
              >
                {props.globalVideoOpts.autoplay ? (
                  <p className="control-buttons" onClick={props.toggleAutoPlay}>
                    Auto-Play: On{" "}
                    <i className="tim-icons icon-triangle-right-17 icons" />
                  </p>
                ) : (
                  <p className="control-buttons" onClick={props.toggleAutoPlay}>
                    Auto-Play: Off{" "}
                    <i className="tim-icons icon-button-pause icons" />
                  </p>
                )}
                {props.globalVideoOpts.loop ? (
                  <p className="control-buttons" onClick={props.toggleAutoLoop}>
                    Auto-Loop: On{" "}
                    <i className="tim-icons icon-refresh-02 icons" />
                  </p>
                ) : (
                  <p className="control-buttons" onClick={props.toggleAutoLoop}>
                    Auto-Loop: Off{" "}
                    <i className="tim-icons icon-refresh-02 icons" />
                  </p>
                )}

                {props.globalVideoOpts.muted ? (
                  <p className="control-buttons" onClick={props.toggleMute}>
                    Mute On <i className="tim-icons icon-volume-98 icons" />
                  </p>
                ) : (
                  <p className="control-buttons" onClick={props.toggleMute}>
                    Mute Off <i className="tim-icons icon-volume-98 icons" />
                  </p>
                )}
              </div>
            ) : (
              <div
                className="dropdown-content fade-out"
                onMouseLeave={() => props.fadeOut()}
              >
                {props.globalVideoOpts.autoplay ? (
                  <p className="control-buttons" onClick={props.toggleAutoPlay}>
                    Auto-Play: On{" "}
                    <i className="tim-icons icon-triangle-right-17 icons" />
                  </p>
                ) : (
                  <p className="control-buttons" onClick={props.toggleAutoPlay}>
                    Auto-Play: Off{" "}
                    <i className="tim-icons icon-button-pause icons" />
                  </p>
                )}
                {props.globalVideoOpts.loop ? (
                  <p className="control-buttons" onClick={props.toggleAutoLoop}>
                    Auto-Loop: On{" "}
                    <i className="tim-icons icon-refresh-02 icons" />
                  </p>
                ) : (
                  <p className="control-buttons" onClick={props.toggleAutoLoop}>
                    Auto-Loop: Off{" "}
                    <i className="tim-icons icon-refresh-02 icons" />
                  </p>
                )}

                {props.globalVideoOpts.muted ? (
                  <p className="control-buttons" onClick={props.toggleMute}>
                    Mute On <i className="tim-icons icon-volume-98 icons" />
                  </p>
                ) : (
                  <p className="control-buttons" onClick={props.toggleMute}>
                    Mute Off <i className="tim-icons icon-volume-98 icons" />
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default VideoNavBar;
