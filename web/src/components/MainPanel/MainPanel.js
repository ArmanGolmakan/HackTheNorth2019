import React from "react";
import Register from "./Register/Register";
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
            bloodType: "Blood Type"
        };
    }

    render() {
        return (
            <div className="MainPanel">
                <LeftPanel />
                <Register />
            </div>
        );
    }
}

export default MainPanel;
