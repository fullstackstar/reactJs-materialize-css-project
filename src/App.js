import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Regulars from './pages/regulars';
import RegularsAdd from './pages/regulars_add';
import Reports from './pages/reports';
import Products from './pages/products';
import DisplayName from './pages/display-name';
import Transactions from './pages/transactions';
import Auth from './pages/auth';
import Manifest from './pages/manifest';
import ProductManifestReport from './pages/product-manifest-reports';

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
