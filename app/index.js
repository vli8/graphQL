import React from "react";
import { render } from "react-dom";
import HomePage from "./components/homepage";
import { HashRouter, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./graphQL/apolloClient";

render(
  <ApolloProvider client={apolloClient}>
    <HashRouter>
      <Route exact path="/homepage" component={HomePage} />
    </HashRouter>
  </ApolloProvider>,
  document.getElementById("app-portal")
);
