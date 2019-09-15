import React from "react";
import Description from "../Description/Description";
import "./LoadPatient.css";

class LoadPatient extends React.Component {
  render() {
    return (
      <div className="RegisterContainer">
        <div className="FormContainer">
          <div className="Title">Load Patient</div>
          <div className="FirstRow">
            <Description description="Name" value="James" />
            <Description description="Age" value="20" />
            <Description
              description="Emergency Contact"
              value="123-4567-8901"
            />
          </div>
          <Description description="Current Medications" value="Penicilin" />
          <Description description="Allergies" value="Peanut" />
          <Description description="Blood Type" value="AB" />
          <div className="TextForms"></div>
        </div>
      </div>
    );
  }
}

export default LoadPatient;
