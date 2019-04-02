import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

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

  //Go back to previous step
  previousStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      bio,
      occupation,
      step,
      city
    } = this.state;
    const values = { firstName, lastName, email, bio, occupation, city };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            previousStep={this.previousStep}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            values={values}
          />
        );

      case 4:
        return <Success />;
    }
    return <h1> step 1 </h1>;
  }
}

export default UserForm;
