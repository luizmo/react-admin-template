import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Home, NotFound } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Home}/>
        <Route exact path="/" component={Login}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
