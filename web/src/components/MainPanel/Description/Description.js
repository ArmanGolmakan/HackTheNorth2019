import React from "react";
import "./Description.css";

class Description extends React.Component {
  render() {
    const { description, value } = this.props;
    return (
      <div className="Description">
        <div className="desc">{description}</div>
        <div className="value">{value}</div>
      </div>
    );
  }
}

export default Description;
