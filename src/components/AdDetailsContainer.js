import React, { Component } from "react";
import AdDetails from "./AdDetails";
import { connect } from "react-redux";
import { loadAd, deleteAd } from "../actions/index";

class AdDetailsContainer extends Component {
  componentDidMount() {
    this.props.loadAd(Number(this.props.match.params.id));
  }

  delete = () => {
    this.props.deleteAd(this.props.ad);
    this.props.history.push("/");
  };

  render() {
    if (!this.props.ad) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <AdDetails ad={this.props.ad} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  ad: state.ad
});

export default connect(
  mapStateToProps,
  { loadAd, deleteAd }
)(AdDetailsContainer);
