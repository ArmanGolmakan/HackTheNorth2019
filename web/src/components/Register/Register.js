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
        <div className="1">
          <div className="2">
            <div className="newPatient">New Patient</div>
            <div className="loadPatient">Load Patient</div>
            <div className="settings">Settings</div>
          </div>
          <div className="3">
            <div className="4">Registration</div>
            <div className="5">
              <input type="text" name="name" placeholder="Name" />
              <input type="text" name="emergcontact" placeholder="Emergency Contact" />
              <input type="text" name="curmeds" placeholder="Current Medications" />
              <input type="text" name="alrg" placeholder="Allergies" />
              <input type="text" name="bt" placeholder="Blood Type" />
              <input type="text" name="age" placeholder="Age" />
            </div>
            <div className="6">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
