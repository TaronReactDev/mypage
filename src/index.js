import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Projectes from "./componentes/Projectes/index"
import XikOik from "./componentes/Projectes/Project/X_O/Xikoik"

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router >
  <div>
    <Switch>
       <Route  exact path= "/"> <App/> </Route>
      <Route   path= "/projectes"> <Projectes/> </Route>
      <Route   path= "/projectestictactoe"> <XikOik/> </Route>
    
    </Switch>
  </div>
  
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
