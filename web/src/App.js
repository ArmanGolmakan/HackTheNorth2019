import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import MainPanel from "./components/MainPanel/MainPanel";
import ViewPatient from './components/ViewPatient/ViewPatient';
import Settings from './components/Settings/Settings';

function App() {
  return (
    <Router>
      <div className="App">
        <MainPanel />
        <Switch>
          <Route path="/" exact component={MainPanel} />
          <Route path="/viewpatient" component={ViewPatient} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
