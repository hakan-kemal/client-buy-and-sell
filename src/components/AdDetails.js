import React, { Component } from "react";

export default class AdDetails extends Component {
  render() {
    const { ad } = this.props;
    return (
      <div>
        <h1>{ad.title}</h1>
        <img src={ad.url} alt="ad-impression"></img>
        <p>{ad.description}</p>
        <button onClick={this.props.delete}>REMOVE ADD</button>
      </div>
    );
  }
}
