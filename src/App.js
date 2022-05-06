import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Details from "./pages/Details";
import { AppGlobalState } from "./context/context";
class App extends Component {
  render() {
    return (
      <AppGlobalState>
        <div className="app-container">
          <h1 className="app-title text-center">Marvel characters!</h1>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="details/:id" element={<Details />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AppGlobalState>
    );
  }
}

export default App;
