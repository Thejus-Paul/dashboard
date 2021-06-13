import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon';

function App() {
  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <Router>
        <Switch>
          <Route path="/home" >
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </MuiPickersUtilsProvider>
  );
}

export default App;
