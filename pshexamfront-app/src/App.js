import React from "react";

import './App.css';
import PrincipalPanel from "./components/PrincipalPanel.js"
import {Switch, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PrincipalPanel} />
      </Switch>
    </div>
  );
}

export default App;
