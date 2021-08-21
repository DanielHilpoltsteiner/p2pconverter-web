import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./header";
import Home from "./home";
import About from "./about";
import ReportBug from "./reportbug";

class Page extends Component {
  state = {};

  render() {
    return (
      <HashRouter>
        <Header href="/" />
        <Switch>
          <Route path={["/home", "/"]} exact render={(props) => <Home {...props} />} />
          <Route path="/about" exact render={(props) => <About {...props} />} />
          <Route path="/reportbug" exact render={(props) => <ReportBug {...props} />} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Page;
