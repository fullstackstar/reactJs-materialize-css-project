import React from 'react';
import {
    Link
} from "react-router-dom";
import Header from '../components/header';

export default function Regulars() {
    return (
        <div>
            <Header></Header>
            <div className="row">
                <div className="col s12 m12 m6">
                    <div className="card darken-1">
                        <div className="card-content">
                            <span className="card-title">Regulars <Link className="float-right" to="/regulars-add"><i className="material-icons">add</i></Link></span>
                            <div>
                                <form>
                                    <div className="row">
                                        <div className={'col s12 m12'}>
                                            <ul className="collection">
                                                <li className="collection-item inverted">Display Name</li>
                                                <li className="collection-item">Alvin<span className="float-right color-red"><i className="material-icons">delete</i></span></li>
                                                <li className="collection-item">Alvin<span className="float-right color-red"><i className="material-icons">delete</i></span></li>
                                                <li className="collection-item">Alvin<span className="float-right color-red"><i className="material-icons">delete</i></span></li>
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