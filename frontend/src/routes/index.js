import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Timeline from '../pages/Timeline';
import Login from '../pages/Login';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact isPrivate component={Timeline} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default Routes;
