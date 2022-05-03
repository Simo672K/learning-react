import React, { Component } from "react";
import CardsList from "./components/CardsList";
class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="app-title text-center">Marvel characters!</h1>
        <CardsList></CardsList>
      </div>
    );
  }
}

export default App;
