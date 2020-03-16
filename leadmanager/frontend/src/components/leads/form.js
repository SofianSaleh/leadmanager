import React, { Component } from "react";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };
  render() {
    return (
      <div>
        <h1>Add Leads Form</h1>
      </div>
    );
  }
}

export default Form;
