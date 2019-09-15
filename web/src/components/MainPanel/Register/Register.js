import React from "react";
import TextField from "@material-ui/core/TextField";
import upload from "../../../functions/upload";
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
    upload("hello");
  };

  render() {
    return (
      <div className="RegisterContainer">
        <div className="FormContainer">
          <div className="Title">Registration</div>
          <div className="TextForms">
            {Object.keys(this.state).map(key => {
              return (
                <div className="TextField">
                  <TextField style={{width: '300px', fontSize: '32px'}} 
                    OnChange={e => {
                      this.textInputChange(e, key);
                    }}
                    placeholder={this.state[key]}
                  />
                </div>
              );
            })}
          </div>
          {/* <button className="submit">Submit</button> */}
        </div>
      </div>
    );
  }
}

export default Register;
