import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./header";
import Home from "./home";
import About from "./about";
import ReportBug from "./reportbug";
import ReactGA from "react-ga";
import createHistory from "history/createBrowserHistory";

const history = createHistory();
class Page extends Component {
  state = {};

  componentDidMount() {
    history.listen((location) => {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
    });
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <HashRouter history={history}>
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
