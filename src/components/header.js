import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component{
    state = {
        isSideNavOpen: false
    }
    render(){
        return <header className="App-header">
            <nav>
                <ul>
                    <li><a href="#" data-target="slide-out" className="sidenav-trigger" style={{display: 'block'}}
                           onClick={() => this.setState({isSideNavOpen: true})}><i className="material-icons">menu</i></a>
                    </li>
                    <li>Yoga</li>
                    <li></li>
                </ul>
            </nav>
            <div className={this.state.isSideNavOpen? "sidenav-overlay open": "sidenav-overlay"} style={{display: 'none'}}
                 onClick={() => this.setState({isSideNavOpen: false})}>
            </div>
            <ul id="slide-out" className={this.state.isSideNavOpen? "sidenav open": "sidenav"}>
                <li><div className="user-view"></div></li>
                <li><Link to="/auth">Auth</Link></li>
                <li><Link to="/manifest">Manifest</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/regulars">Regulars</Link></li>
                <li><Link to="/reports">Reports</Link></li>
                <li><Link to="/transactions">Transactions</Link></li>
            </ul>
        </header>
    }
}