import React, { Component } from "react";

class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };
  // Proceed to Next Step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  previousStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  render() {
    return <h1> step 1 </h1>;
  }
}

export default UserForm;
