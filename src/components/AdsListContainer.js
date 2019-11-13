import React, { Component } from "react";
import AdsList from "./AdsList";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadAds } from "../actions/index";

class AdsListContainer extends Component {
  componentDidMount() {
    this.props.loadAds();
  }
  render() {
    if (!this.props.ads) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <AdsList ads={this.props.ads} />
          {/* <button>
            <Link to={"advertisements/new"}>NEW AD</Link>
          </button> */}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  ads: state.ads
});

export default connect(
  mapStateToProps,
  { loadAds }
)(AdsListContainer);
