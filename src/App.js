import "./App.css";
import React, { Component } from "react";
import Page from "./components/page";
import ReactGA from "react-ga";

ReactGA.initialize("UA-189061153-1");

class App extends Component {
  render() {
    return <Page></Page>;
  }
}

export default App;
