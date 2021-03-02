import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Calculator from "./components/Calculator";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" component={Calculator} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
