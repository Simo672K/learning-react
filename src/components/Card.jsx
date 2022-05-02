import React, { Component } from "react";

export default class card extends Component {
  constructor() {
    super();
    this.state = {
      img: "https://images.unsplash.com/photo-1562569633-622303bafef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      title: "Lorem ipsum dolor sit amet.",
      body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi oditre iciendis neque, a temporibus impedit ducimus esse cumque sed aspernatur."
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card-img">
          <img src={this.state.img} alt="" />
          
        </div>
        <div className="card-desc">
          <h3 className="card-desc__title">
            {this.state.title}
          </h3>
          <p className="card-desc__body">
            {this.state.body}
          </p>
        </div>
      </div>
    );
  }
}
