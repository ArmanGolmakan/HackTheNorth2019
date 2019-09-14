import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import upload from "../../functions/upload";
import { red } from "@material-ui/core/colors";
import "./Register.css";

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
    upload("hema to be 1st place");
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
      <div>
        <div className="container">
          <div className="leftTabDiv">
            <div className="newPatient">New Patient</div>
            <div className="loadPatient">Load Patient</div>
            <div className="settings">Settings</div>
          </div>
          <div className="regFormDiv">
            <div className="4">Registration</div>
            <div className="formDiv">
              <div className="reg">Registration</div>
              <input type="text" name="name" placeholder="Name" />
              <input
                type="text"
                name="emergcontact"
                placeholder="Emergency Contact"
                onChange={e => {
                  this.textInputChange(e, "emergencyContact");
                }}
              />
              <input
                type="text"
                name="curmeds"
                placeholder="Current Medications"
                onChange={e => {
                  this.textInputChange(e, "currentMedications");
                }}
              />
              <input
                type="text"
                name="alrg"
                placeholder="Allergies"
                onChange={e => {
                  this.textInputChange(e, "allergies");
                }}
              />
              <input
                type="text"
                name="bt"
                placeholder="Blood Type"
                onChange={e => {
                  this.textInputChange(e, "bloodType");
                }}
              />
              <input
                type="text"
                name="age"
                placeholder="Age"
                onChange={e => {
                  this.textInputChange(e, "age");
                }}
              />
              <Button onClick={this.onSubmitButtonClick} />
            </div>
            <div className="picDiv"></div> /*picDiv*/
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
