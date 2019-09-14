import React from "react";

class Button extends React.Component {
  state = {};
  render() {
    return <button onClick={this.props.onClick}>Submit</button>;
  }
}

export default Button;
