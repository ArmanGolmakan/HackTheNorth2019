import React from "react";
import TextInput from "../TextInput";
import Button from "../Button";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "" };
  }
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
    return (
      <div>
        <TextInput onChange={this.textInputChange} />
        <Button onClick={this.onSubmitButtonClick} />
      </div>
    );
  }
}

export default Register;
