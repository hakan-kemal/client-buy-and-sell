import React, { Component } from "react";
import CreateAd from "./CreateAd";
import { connect } from "react-redux";
import { createAd } from "../actions/index";

class CreateAdContainer extends Component {
  state = {
    title: "",
    description: "",
    url: "",
    price: "",
    email: "",
    phone: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createAd(this.state);
    this.setState({
      title: "",
      description: "",
      url: "",
      price: "",
      email: "",
      phone: ""
    });
  };

  render() {
    return (
      <CreateAd
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(
  null,
  { createAd }
)(CreateAdContainer);
