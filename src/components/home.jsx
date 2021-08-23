import React, { Component } from "react";
import FileDrop from "./filedrop";
class Home extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="header text-center">
          <h1 className="title">Home</h1>
        </div>
        <div className="text-center">
          P2PConverter is a free service which converts the account statements of P2P sites to a portfolio performance compatible CSV file.
          <br />
          <br />
          <h3>Supported sites</h3>
          <ul className="parent">
            <li>Mintos</li>
            <li>Bondora Go&amp;Grow</li>
            <li>Robocash</li>
            <li>Afranga</li>
            <li>Esketit</li>
            <li>Lendermarket</li>
          </ul>
          <br />
          <br />
          <br />
          <h3>Upload</h3>
          <FileDrop></FileDrop>
        </div>
      </div>
    );
  }
}

export default Home;
