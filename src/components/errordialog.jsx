import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
class ErrorDialog extends Component {
  render() {
    return this.props.show ? (
      <Alert variant="danger" onClose={this.props.handleClose} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{this.props.errorStr}</p>
      </Alert>
    ) : (
      <div></div>
    );
  }
}

export default ErrorDialog;
