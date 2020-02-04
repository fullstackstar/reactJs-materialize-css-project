import React from 'react';

export default function DisplayName() {
    return (
        <div>
        <header className="App-header">
        <nav>
          <ul>
          <li></li>
          <li>SportsJumpers</li>
          <li></li>
          </ul>
        </nav>
      </header>
        <div className="row">
    <div className="col s12 m12 m6">
      <div className="card darken-1">
        <div className="card-content">
          <span className="card-title">Display Name</span>
          <div>
          <form>
      <div className="row">
        
        <div className="input-field col s12 m12">
          <input id="last_name" type="text" className="validate"/>
          <label htmlFor="last_name">Enter Display Name</label>
        </div>
      </div>
      </form>
          </div>
        </div>
        <div className="card-action">
        <a className="waves-effect waves-light btn">OK</a>
        </div>
      </div>
    </div>
    
  </div>
  </div>
    )
}