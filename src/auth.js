import React, { Component } from 'react';
import Header from './elements/header';
import InputMask from "react-input-mask";

export default class Auth extends Component {
    state = {
        submitted: false
    }

    render(){
        return (
            <div>
                <Header></Header>
                <div className="row">
                    <div className="col s12 m12 m6">
                        <div className="card darken-1">
                            <div className="card-content">
                                <div>
                                    <form>
                                        {!this.state.submitted && <div className="row">
                                            <div className={'col s12 m12'}>
                                                <ul className="collection">
                                                    <li className="collection-item inverted">
                                                        <div className="heading">Enter Phone Number</div>
                                                    </li>
                                                    <li className="collection-item">
                                                        <div className="input-field">
                                                            <InputMask mask="(999) - 999 - 9999" alwaysShowMask={true} className="font"/>
                                                        </div>
                                                        <div className="input-field">
                                                            <a className="waves-effect waves-light btn" onClick={() => this.setState({submitted: true})}>Submit</a>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                        }
                                        {this.state.submitted && <div className="row">
                                            <div className={'col s12 m12'}>
                                                <ul className="collection">
                                                    <li className="collection-item inverted">
                                                        <div className="heading">Enter 2FA code</div>
                                                    </li>
                                                    <li className="collection-item">
                                                        <div className="input-field">
                                                            <InputMask mask="999999" alwaysShowMask={true} className="font"/>
                                                        </div>
                                                        <div className="input-field">
                                                            <a className="waves-effect waves-light btn" onClick={() => this.setState({submitted: true})}>Submit</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>}
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