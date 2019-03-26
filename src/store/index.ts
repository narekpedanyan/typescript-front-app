import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../services/reducer';
import {createStore} from "redux";

let store: any;
store = createStore(reducer, composeWithDevTools());

export default store;

