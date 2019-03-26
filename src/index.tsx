import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from './components/App';
import * as React from 'react';
import store from './store';


ReactDOM.render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);