import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import upload from "../../functions/upload";
import { red } from "@material-ui/core/colors";
import './Register.css';
import Checkbox from '@material-ui/core/Checkbox';
import  RadioButtonGroup from '@material-ui/core/Radio';
import SelectField from '@material-ui/core/Select';


const renderTextField = (
  { input, label, meta: { touched, error }, ...custom },
) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
);

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

const renderSelectField = (
  { input, label, meta: { touched, error }, children, ...custom },
) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
);

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
    upload("onion");
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
          <div className="regFormDiv">
            <div className="formDiv">
              
              <div><TextField type="text" name="name" placeholder="Name" /> </div> 
              <div><TextField type="text" name="emergcontact" placeholder="Emergency Contact" onChange={e => { this.textInputChange(e, "emergencyContact") }} /></div>
              <div><TextField type="text" name="curmeds" placeholder="Current Medications" onChange={e => { this.textInputChange(e, "currentMedications") }} /></div>
              <div><TextField type="text" name="alrg" placeholder="Allergies" onChange={e => { this.textInputChange(e, "allergies") }} /></div>
              <div><TextField type="text" name="bt" placeholder="Blood Type" onChange={e => { this.textInputChange(e, "bloodType") }} /></div>
              <div><TextField type="text" name="age" placeholder="Age" onChange={e => { this.textInputChange(e, "age") }} /></div>
            </div>
          </div> 
        </div>
      </div>
    );
  }
}

export default Register;
