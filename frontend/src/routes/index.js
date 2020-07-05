import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Timeline from '../pages/Timeline';
import Login from '../pages/Login';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Timeline} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default Routes;
