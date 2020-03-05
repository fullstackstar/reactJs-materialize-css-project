import React from 'react';
import Header from '../components/header';

export default function Transactions() {
    return (
        <div>
            <Header></Header>
            <div className="row">
                <div className="col s12 m12 m6">
                    <div className="card darken-1">
                        <div className="card-content">
                            <span className="card-title">Transactions</span>
                            <div>
                                <div className="row">
                                    <div className={'col s12 m12'}>
                                        <ul className="collection">
                                            <li className="collection-item inverted row">
                                                <div className='col s6'>Display Name</div>
                                                <div className='col s6'>Current Balance</div>
                                            </li>
                                            <li className="collection-item row">
                                                <div className='col s6'>John Smith</div>
                                                <div className='col s6'>-$50</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={'col s12 m12'}>
                                        <ul className="collection">
                                            <li className="collection-item inverted">
                                                <div className="heading">Enter Value</div>
                                            </li>
                                            <li className="collection-item">
                                                <div className="input-field">
                                                    <input id="last_name" type="text" className="validate"/>
                                                    <label htmlFor="last_name">Amount</label>
                                                </div>
                                                <div className="input-field">
                                                    <a className="waves-effect waves-light btn">OK</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}