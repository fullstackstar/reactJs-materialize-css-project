import React from 'react';

export default function ProductManifestReport() {
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
                            <span className="card-title">Flight Providers(Center) Reports</span>
                            <div>
                                <form>
                                    <div className="row">
                                        <div className={'col s12 m12'}>
                                            <ul className="collection">
                                                <li className="collection-item inverted row" >
                                                    <div className='col s6'>Display Name</div>
                                                    <div className='col s6'>Product</div>
                                                </li>
                                                <li className="collection-item row">
                                                    <div className='col s6'>John Smith</div>
                                                    <div className='col s6'>4000ft
                                                        <span className="float-right color-red"><i className="material-icons">delete</i></span>
                                                    </div>
                                                </li>
                                                <li className="collection-item row">
                                                    <div className='col s6'>Susan</div>
                                                    <div className='col s6'>INST-Tandem
                                                        <span className="float-right color-red"><i className="material-icons">delete</i></span>
                                                    </div>
                                                </li>
                                                <li className="collection-item row">
                                                    <div className='col s6'>Jumperboy</div>
                                                    <div className='col s6'>10,000ft
                                                        <span className="float-right color-red"><i className="material-icons">delete</i></span>
                                                    </div>
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