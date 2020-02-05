import React from 'react';
import {
    Link
} from "react-router-dom";
import Header from './elements/header';

export default function Reports() {
    return (
        <div>
            <Header></Header>
            <div className="row">
                <div className="col s12 m12 m6">
                    <div className="card darken-1">
                        <div className="card-content">
                            <span className="card-title">Reports <Link className="float-right" to="/regulars-add"><i className="material-icons">add</i></Link></span>
                            <div>
                                <form>
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
                                                <li className="collection-item row">
                                                    <div className='col s6'>Susan</div>
                                                    <div className='col s6'>$147</div>
                                                </li>
                                                <li className="collection-item row">
                                                    <div className='col s6'>Jumperboy</div>
                                                    <div className='col s6'>$90</div>
                                                </li>
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