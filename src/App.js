import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import AdsListContainer from "./components/AdsListContainer";
import AdDetailsContainer from "./components/AdDetailsContainer";
import CreateAdContainer from "./components/CreateAdContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/marketplace-42-672171.png"
          className="App-logo"
          alt="logo"
        />
        <p>FullStack Labs - Marketplace Application</p>
        <Route exact path="/" component={CreateAdContainer} />
        <Route exact path="/" component={AdsListContainer} />
        <Route path="/advertisements/:id" component={AdDetailsContainer} />
      </header>
    </div>
  );
}

export default App;
