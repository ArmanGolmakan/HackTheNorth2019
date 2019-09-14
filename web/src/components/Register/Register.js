import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { red } from "@material-ui/core/colors";
import './Register.css';

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
        {/* <TextField
          onChange={e => {
            this.textInputChange(e, "name");
          }}
          defaultValue={name}
        />
        <TextField
          onChange={e => {
            this.textInputChange(e, "age");
          }}
          defaultValue={age}
        />
        <TextField
          onChange={e => {
            this.textInputChange(e, "emergencyContact");
          }}
          defaultValue={emergencyContact}
        />
        <TextField
          onChange={e => {
            this.textInputChange(e, "allergies");
          }}
          defaultValue={allergies}
        />
        <TextField
          onChange={e => {
            this.textInputChange(e, "bloodType");
          }}
          defaultValue={bloodType}
        />
        <Button
          label="Submit"
          primary={true}
          style={styles.button}
          onClick={this.onSubmitButtonClick}
        /> */}
        <div className="container">
          <div className="leftTabDiv">
            <p>New Patient</p>
            <p>Load Patient</p>
            <p>Settings</p>
          </div>
          <div className="mainDiv">
            <div className="regFormDiv">
              <div className="regDiv">
                Registration
              </div>
              <div className="formDiv">
                <p className="name">Name</p>
                <p className="age">Age</p>
                <p>Emergency Contact</p>
                <p>Current Medications</p>
                <p>Allergies</p>
                <p>Blood Type</p>
              </div>
            </div>
            <div className="picDiv">
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default Register;
