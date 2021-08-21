import React, { Component } from "react";

class About extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="header text-center">
          <h1 className="title">About</h1>
        </div>
        <div className="text-center">
          Coded by Aydin Tekin
          <br />
          <a href="https://github.com/exAphex/P2PParser">Github Page</a>
          <br />
          <br />
          This site is free to use and open source. You can support me with a small donation.
        </div>
      </div>
    );
  }
}

export default About;
