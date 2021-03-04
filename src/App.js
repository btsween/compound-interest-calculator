import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Calculator from "./components/Calculator";
import Footer from "./components/navigation/Footer";
import TopNavigation from "./components/navigation/TopNavigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <TopNavigation />
          <Switch>
            <Route path="/" component={Calculator} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
