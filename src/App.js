import React from 'react';
import { Route } from 'react-router-dom';
import AdsListContainer from './components/AdsListContainer';
import AdDetailsContainer from './components/AdDetailsContainer';
import CreateAdContainer from './components/CreateAdContainer';
import Homepage from './components/Homepage';

const App = () => {
  return (
    <div>
      <Route path='/' exact component={Homepage} />
      <Route path='/advertisements' component={AdsListContainer} />
      <Route path='/advertisements' component={CreateAdContainer} />
      <Route path='/advertisements/:id' component={AdDetailsContainer} />
    </div>
  );
};

export default App;
