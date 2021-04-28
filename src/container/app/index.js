import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import AppRoutes from 'container/config';

const App = () => (
  <Router>
    <Switch>
      {
        AppRoutes.map((route) => (
          <Route key={route.id} {...route} />
        ))
      }
      <Redirect from="*" to="/error-404" />
    </Switch>
  </Router>
);

export default App;
