import React from 'react';
import './App.css';
import {MuiThemeProvider} from '@material-ui/core';
import CssBaseline from '@material-ui/core/es/CssBaseline/CssBaseline';
import {getThemeFromName} from './themes';
import {Route, Router, Switch} from 'react-router-dom';
import NotFound from './pages/not-found';
import Index from './pages/index';

const App = () => (
  <MuiThemeProvider theme={getThemeFromName('default')}>
    <CssBaseline>
      <Router>
        <Switch>
          <Route
            component={Index}
            exact={true}
            path={'/'}
          />
          <Route
            component={NotFound}
          />
        </Switch>
      </Router>
    </CssBaseline>
  </MuiThemeProvider>
);

export default App;
