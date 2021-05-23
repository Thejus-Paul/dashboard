import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Login = lazy(() => import('./pages/login'))

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading... </p>}>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
