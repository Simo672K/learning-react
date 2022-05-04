import React, { Component } from "react";
import Button from "./Button";
export default class card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-img">
          <img src={this.props.data.thumbnail.path+".jpg"} alt="marvel" />
          
        </div>
        <div className="card-desc">
          <h3 className="card-desc__title">
            {this.props.data.name}
          </h3>
          <p className="card-desc__body">
            {this.props.data.description !== ""? this.props.data.description: "No description given"}
          </p>
          <Button href={"details/"+this.props.data.id}>
            More details
          </Button>
        </div>
      </div>
    );
  }
}
