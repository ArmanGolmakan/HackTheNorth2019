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
<<<<<<< HEAD
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
=======
      <div>
        <div className="container">
          <div className="regFormDiv">
            <div className="formDiv">
              
              <div className="nameField"><TextField type="text" name="name" placeholder="Name" /> </div> 
              <div className="contactField"><TextField type="text" name="emergcontact" placeholder="Emergency Contact" onChange={e => { this.textInputChange(e, "emergencyContact") }} /></div>
              <div className="medsField"><TextField type="text" name="curmeds" placeholder="Current Medications" onChange={e => { this.textInputChange(e, "currentMedications") }} /></div>
              <div className="allergyField"><TextField type="text" name="alrg" placeholder="Allergies" onChange={e => { this.textInputChange(e, "allergies") }} /></div>
              <div className="bloodField"><TextField type="text" name="bt" placeholder="Blood Type" onChange={e => { this.textInputChange(e, "bloodType") }} /></div>
              <div className="ageField"><TextField type="text" name="age" placeholder="Age" onChange={e => { this.textInputChange(e, "age") }} /></div>
            
              
             
            </div>

          </div> 

>>>>>>> 4bda81ce2454951ae26c292eee1c5b17bac13889
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
