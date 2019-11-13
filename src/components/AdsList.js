import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdsList extends Component {
  render() {
    const { ads } = this.props;
    return (
      <div>
        <h1>AdsList</h1>
        <p>There are currently {ads.length} products for sale</p>
        {/* <ul> */}
        {ads.map(ad => (
          <div className="ad-card" key={ad.id}>
            {/* <h6>{ad.title}</h6> */}
            <h6>{ad.title}</h6>
            <img className="ad-image" src={ad.url} alt="ad-impression"></img>
            <Link to={`/advertisements/${ad.id}`}>
              <h6>Product description</h6>
            </Link>
            {/* <p>{ad.description}</p> */}
            <h6>{ad.price}</h6>
          </div>
        ))}
        {/* </ul> */}
      </div>
    );
  }
}
