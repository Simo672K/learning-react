import React, { Component } from 'react'
import Card from "./Card";

export default class CardsList extends Component {
    constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    fetch(
      "https://gateway.marvel.com:443/v1/public/characters?limit=90&ts=0faE4&apikey=5538f0b6e1c38cc40dc93eaa8d1c5bd6&hash=643de5ac439f46275d14b14e07141625"
    )
      .then((data) => data.json())
      .then((res) => {
        this.setState({ loading: false, data: res.data.results });
      });
  }
  render() {
    return (
      <div className="cards-grid">     
        {
          this.state.loading 
          ?
          <h2 style={{textAlign: "center", marginTop: "1.2rem"}}>please wait while loading..</h2>
          :
          this.state.data.map(obj=><Card key={obj.id} data={obj}/>)
        }
      </div>
    )
  }
}
