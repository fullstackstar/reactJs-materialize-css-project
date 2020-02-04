import React from 'react';
import {Link} from 'react-router-dom'

export default function RegularsAdd() {
    return (
        <div>
        <header className="App-header">
        <nav>
          <ul>
          <li><Link to={'/regulars'} className="sidenav-trigger" style={{display: 'block'}}><i className="material-icons">chevron_left</i></Link></li>
          <li>SportsJumpers</li>
          <li></li>
          </ul>
        </nav>
      </header>
        <div className="row">
    <div className="col s12 m12 m6">
      <div className="card darken-1">
        <div className="card-content">
          <span className="card-title">Regulars Add</span>
          <div>
          <form>
      <div className="row">
        
        <div className="input-field col s12 m12">
          <input id="last_name" type="text" className="validate"/>
          <label htmlFor="last_name">Phone Number</label>
        </div>
      </div>
      </form>
          </div>
        </div>
        <div className="card-action">
        <a className="waves-effect waves-light btn">Submit</a>
        </div>
      </div>
    </div>
    
  </div>
  </div>
    )
}