import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    //Processb Form to API
    this.props.nextStep();
  };
  previous = e => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    const {
      values: { firstName, lastName, occupation, city, bio }
    } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm Details" />
          <List>
            <ListItem primarytext="First Name" secondaryText={firstName} />
            <ListItem primarytext="Last Name" secondaryText={lastName} />
            <ListItem primarytext="Occupation" secondaryText={occupation} />
            <ListItem primarytext="City" secondaryText={city} />
            <ListItem primarytext="Bio" secondaryText={bio} />
          </List>
          <RaisedButton
            label="Confirm"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={true}
            style={styles.button}
            onClick={this.previous}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};
export default Confirm;
