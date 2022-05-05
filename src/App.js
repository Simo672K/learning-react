import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Details from "./pages/Details";
class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="app-title text-center">Marvel characters!</h1>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="details/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
