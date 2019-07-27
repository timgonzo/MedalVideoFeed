import React from "react";
import "./VideoNavBar.css";
import "../../assets/css/nucleo-icons.css";
import logo from "../../assets/img/brandActive.png";

const VideoNavBar = props => {
  return (
    <div className="fixed-top">
      <nav class="navbar">
        <img src={logo} alt="Medal.TV Logo" className="nav-logo" />
        <div className="main-nav" id="js-menu">
          <div className="navbar-toggle" onMouseLeave={() => props.fadeOut()}>
            <p className="settings-header" onMouseOver={() => props.fadeIn()}>
              Global Video Settings{" "}
              <i className="tim-icons icon-settings-gear-63 icons" />
            </p>
            {props.showDropDown ? (
              <div
                className="dropdown-content fade-in"
                onMouseLeave={() => props.fadeOut()}
              >
                <p className="control-buttons">
                  Play <i className="tim-icons icon-triangle-right-17 icons" />
                </p>
                <p className="control-buttons">
                  Pause <i className="tim-icons icon-button-pause icons" />
                </p>
                <p className="control-buttons">
                  Toggle Auto-Loop{" "}
                  <i className="tim-icons icon-refresh-02 icons" />
                </p>
                <p className="control-buttons">
                  Toggle Volume <i className="tim-icons icon-volume-98 icons" />
                </p>
              </div>
            ) : (
              <div
                className="dropdown-content fade-out"
                onMouseLeave={() => props.fadeOut()}
              >
                <p className="control-buttons">
                  Play <i className="tim-icons icon-triangle-right-17 icons" />
                </p>
                <p className="control-buttons">
                  Pause <i className="tim-icons icon-button-pause icons" />
                </p>
                <p className="control-buttons">
                  Toggle Auto-Loop{" "}
                  <i className="tim-icons icon-refresh-02 icons" />
                </p>
                <p className="control-buttons">
                  Toggle Volume <i className="tim-icons icon-volume-98 icons" />
                </p>
              </div>
            )}
            {props.showDropDown ? (
              <div
                className="dropdown-content fade-out"
                onMouseLeave={() => props.fadeOut()}
              >
                <p className="control-buttons">
                  Play <i className="tim-icons icon-triangle-right-17 icons" />
                </p>
                <p className="control-buttons">
                  Pause <i className="tim-icons icon-button-pause icons" />
                </p>
                <p className="control-buttons">
                  Toggle Auto-Loop{" "}
                  <i className="tim-icons icon-refresh-02 icons" />
                </p>
                <p className="control-buttons">
                  Toggle Volume <i className="tim-icons icon-volume-98 icons" />
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default VideoNavBar;
