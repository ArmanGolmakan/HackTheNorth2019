import React from "react";
import Register from "./Register/Register";
import LoadPatient from "./LoadPatient/LoadPatient";
import LeftPanel from "./LeftPanel/LeftPanel";
import "./MainPanel.css";

class MainPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Name",
      age: "Age",
      emergencyContact: "Emergency Contact",
      currentMedications: "Current Medications",
      allergies: "Allergies",
      bloodType: "Blood Type",
      currentPanel: "Registration"
    };
  }

  render() {
    return (
      <div className="MainPanel">
        <LeftPanel
          onClick={panel => {
            this.setState({
              currentPanel: panel
            });
          }}
        />
        {this.state.currentPanel === "Registration" ? (
          <Register />
        ) : (
          <LoadPatient />
        )}
      </div>
    );
  }
}

export default MainPanel;
