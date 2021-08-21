import React, { Component } from "react";

class ReportBug extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="header text-center">
          <h1 className="title">Report Bug</h1>
        </div>
        <div className="text-center">
          If you encounter bugs (your file doesnt get recognized or output is malformated) please report the issue, so we can ensure a good user experience for you.
          <br />
          <br />
          <a href="https://github.com/exAphex/P2PParser">Open Github Issue (preffered way)</a>
          <br />
          <br />
          <a href="https://t.me/carlsagun">Or via Telegram</a>
        </div>
      </div>
    );
  }
}

export default ReportBug;
