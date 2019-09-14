import React from "react";

class TextInput extends React.Component {
  render() {
    return <textarea onChange={this.props.onChange} />;
  }
}

export default TextInput;
