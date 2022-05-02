import React, { Component } from "react";
import CardsList from "./components/CardsList";
import Card from "./components/Card";
class App extends Component {
  constructor() {
    super();
    this.state = [{}];
  }

  componentDidMount() {
    const data = await fetch(
      "https://gateway.marvel.com:443/v1/public/characters?apikey=5538f0b6e1c38cc40dc93eaa8d1c5bd6"
    );
    console.log(data.json());
    // this.setState(toJson);
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
        <CardsList>
          <Card></Card>
        </CardsList>
      </div>
    );
  }
}

export default App;
