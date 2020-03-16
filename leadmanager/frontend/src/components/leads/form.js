import React, { Component } from "react";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };
  render() {
    const { name, email, message } = this.state;
    return (
      <div>
        <h1>Add Leads Form</h1>
      </div>
    );
  }
}

export default Form;
