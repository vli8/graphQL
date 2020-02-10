import React from "react";
import { render } from "react-dom";
import HomePage from "./components/homepage";
import { HashRouter, Route, Switch } from "react-router-dom";

render(
  <HashRouter>
    <Route exact path="/homepage" component={HomePage} />
  </HashRouter>,
  document.getElementById("app-portal")
);
