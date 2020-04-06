import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomeMain from '../app/home/HomeMain';

function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/" render={() => <HomeMain />} />
    </Switch>
  );
}

export default Routes;
