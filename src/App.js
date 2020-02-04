import React from 'react';
import logo from './logo.svg';
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Regulars from './regulars';
import RegularsAdd from './regulars_add';
import Reports from './reports';
import Products from './products';
import DisplayName from './display-name';
import Transactions from './transactions';
import Auth from './auth';
import Manifest from './manifest';
import ProductManifestReport from './product-manifest-reports';

function App() {
  return (
    <Router>
      <div className="App">
      
      
      <Switch>
          <Route path="/regulars">
            <Regulars />
          </Route>
          <Route path="/regulars-add">
            <RegularsAdd />
          </Route>
          <Route path="/reports">
            <Reports />
          </Route>
          <Route path="/products">
            <Products/>
          </Route>
          <Route path="/display-name">
            <DisplayName/>
          </Route>
          <Route path="/transactions">
            <Transactions/>
          </Route>
          <Route path="/manifest">
            <Manifest/>
          </Route>
          <Route path="/product-manifest-reports">
            <ProductManifestReport/>
          </Route>
          <Route path="/auth">
            <Auth/>
          </Route>
          <Route path="/">
            <Regulars />
          </Route>
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
