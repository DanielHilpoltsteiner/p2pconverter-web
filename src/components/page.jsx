import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./header";
import Home from "./home";
import About from "./about";
import ReportBug from "./reportbug";
import ReactGA from "react-ga";
import createHistory from "history/createBrowserHistory";
import CookieConsent, { getCookieConsentValue, Cookies } from "react-cookie-consent";

const history = createHistory();
class Page extends Component {
  state = {};

  handleAcceptCookie() {
    ReactGA.initialize("UA-189061153-1");
  }

  handleDeclineCookie() {
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
  }

  componentDidMount() {
    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      this.handleAcceptCookie();
    }

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
        <CookieConsent buttonClasses="btn btn-primary" containerClasses="alert alert-warning col-lg-12" contentClasses="text-capitalize" enableDeclineButton onAccept={this.handleAcceptCookie} onDecline={this.handleDeclineCookie}>
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </HashRouter>
    );
  }
}

export default Page;
