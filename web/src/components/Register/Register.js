import React from "react";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  textInputChange = (event, type) => {
    this.setState({
      [type]: event.target.value
    });
  };

  onSubmitButtonClick = () => {
    // send inputText to firebase
  };
  render() {
    return (
      <React.Fragment>
        <AppBar title="Enter Personal Details" />
        <TextField
          onChange={e => {
            this.textInputChange(e, "occupation");
          }}
          defaultValue={"job"}
        />
        <Button
          label="Submit"
          primary={true}
          style={styles.button}
          onClick={this.onSubmitButtonClick}
        />
      </React.Fragment>
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
