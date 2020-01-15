import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Register from '../pages/Register/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component="" />
      <Route path="/register" exact component={Register} />
    </Switch>
  );
}
