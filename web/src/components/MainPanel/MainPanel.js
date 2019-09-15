import React from "react";
import upload from "../../functions/upload";
import Register from "../Register/Register";
import "./MainPanel.css";
import LeftPanel from "../LeftPanel/LeftPanel";

const handlePress = () => false

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
