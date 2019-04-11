import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from './containers/App';
import * as React from 'react';
import store from './store';

ReactDOM.render (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);