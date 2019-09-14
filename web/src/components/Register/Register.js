import React from "react";
import TextInput from "../TextInput";
import Button from "../Button";
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import RaisedButton from '@material-ui/core/Button';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "" };
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  textInputChange = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  onSubmitButtonClick = () => {
    // send inputText to firebase
  };
  state = {};
  render() {
    const { values, textInputChange } = this.props;
    return (
        <React.Fragment>
          <AppBar title="Enter Personal Details" />
          <TextField
            hintText="Enter Your Occupation"
            floatingLabelText="Occupation"
            onChange={this.textInputChange('occupation')}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={this.textInputChange('city')}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText="Enter Your Bio"
            floatingLabelText="Bio"
            onChange={this.textInputChange('bio')}
            defaultValue={values.bio}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
     
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Register;
