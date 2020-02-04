import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import M from 'materialize-css';
  import Header from './elements/header'

export default class Products extends Component {

  
  render(){
return (
        <div>
        <Header></Header>
        <div className="row">
    <div className="col s12 m12 m6">
      <div className="card darken-1">
        <div className="card-content">
          <span className="card-title">Products</span>
          <div>
          <form>
      <div className="row">
        <div className={'col s12 m12'}>
          <ul className="collection separated">
            
            <li className="collection-item">4000ft</li>
            <li className="collection-item">10,000ft</li>
            <li className="collection-item">4000ft Renting</li>
            <li className="collection-item">10,000ft Renting</li>
            <li className="collection-item">INST-Tandem</li>
            <li className="collection-item">INST-Tandem Owns</li>
            <li className="collection-item">INST-SL/IAD</li>
            <li className="collection-item">INST-Coach</li>
            <li className="collection-item">STU-Coach</li>
            <li className="collection-item">STU-Tandem</li>
            <li className="collection-item">STU-SL/IAD</li>
          </ul>
        </div>
    
      </div>
      </form>
          </div>
        </div>
        
      </div>
    </div>
    
  </div>
  </div>
    )
  }
    
}