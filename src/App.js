import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
