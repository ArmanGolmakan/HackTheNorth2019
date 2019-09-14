import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import upload from "../../functions/upload";

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
      <div>
        <TextField
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
        />
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
