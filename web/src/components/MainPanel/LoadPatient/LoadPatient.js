import React from "react";
import firebase from "firebase";
import Description from "../Description/Description";
import "./LoadPatient.css";

class LoadPatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      age: " ",
      emergencyContact: " ",
      currentMedications: " ",
      allergies: " ",
      bloodType: " "
    };
  }

  componentWillMount() {
    const firebaseApp = firebase.database().ref("user/");
    firebaseApp.on("value", snapshot => {
      if (snapshot.val().inputObj) {
        let newState = snapshot.val().inputObj.input;
        this.setState({
          ...newState
        });
      }
    });
  }
  render() {
    const {
      name,
      age,
      emergencyContact,
      currentMedications,
      allergies,
      bloodType
    } = this.state;
    return (
      <div className="RegisterContainer">
        <div className="FormContainer">
          <div className="Title">Load Patient</div>
          <div className="FirstRow">
            <Description description="Name" value={name} />
            <Description description="Age" value={age} />
            <Description
              description="Emergency Contact"
              value={emergencyContact}
            />
          </div>
          <Description
            description="Current Medications"
            value={currentMedications}
          />
          <Description description="Allergies" value={allergies} />
          <Description description="Blood Type" value={bloodType} />
          <div className="TextForms"></div>
        </div>
      </div>
    );
  }
}

export default LoadPatient;
