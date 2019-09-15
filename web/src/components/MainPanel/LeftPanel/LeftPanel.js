import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./LeftPanel.css";

class LeftPanel extends React.Component {
  state = {};
  render() {
    return (
      <div className="LeftPanelContainer">
        <div className="LeftPanel">
          <div
            onClick={() => {
              this.props.onClick("Registration");
            }}
          >
            <span>REGISTRATION</span>
          </div>
          <div
            onClick={() => {
              this.props.onClick("Load");
            }}
          >
            <span>LOAD PATIENT</span>
          </div>
          <div><span>SETTING</span></div>
          {/* <div>
            <Link to="./../Register/Register">NEW PATIENT</Link>
            </div>
            <div>
                <Link to="./../ViewPatient/ViewPatient">Load Patient</Link>
            </div>
            <div>
                <Link to="./../SETTING/SETTING">Settings</Link>
            </div> */}
        </div>
      </div>
    );
  }
}

export default LeftPanel;
