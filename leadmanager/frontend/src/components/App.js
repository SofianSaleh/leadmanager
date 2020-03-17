import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from "./layout/header.js";
import Dashboard from "./leads/dashboard";

import { Provider } from "react-redux";
import store from "../store";

// Alert options
const alertOptions = { timeout: 4000, postion: "top center" };

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Fragment>
            <Header />
            <div className="container">
              <Dashboard />
            </div>
          </Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
