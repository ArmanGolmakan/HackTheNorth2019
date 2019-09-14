import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import upload from "../../functions/upload";
import "./Register.css";

const handlePress = () => false

class Register extends React.Component {
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

  textInputChange = (event, type) => {
    this.setState({
      [type]: event.target.value
    });
  };

  onSubmitButtonClick = () => {
    // send inputText to firebase (James)
    upload("hello");
  };

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
      <div className="Register">
        <div className="LeftPanel">
          <div>NEW PATIENT</div>
          <div>LOAD PATIENT</div>
          <div>SETTING</div>
        </div>

        <div className="FormBackground">
          <div className="FormContainer">
            <div className="Title">Registration</div>
            <div className="TextForms">
              {Object.keys(this.state).map(key => {
                return (
                  <div className="TextField">
                    <TextField
                      OnChange={e => {
                        this.textInputChange(e, key);
                      }}
                      placeholder={this.state[key]}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button className="submit">Submit</button>
      </div>
    );
  }
}

const styles = {
  button: {
    margin: 15,
    background: "red"
  }
};

export default Register;
