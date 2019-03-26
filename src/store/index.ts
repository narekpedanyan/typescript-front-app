import { composeWithDevTools } from 'redux-devtools-extension';
import {applyMiddleware, compose, createStore} from "redux";
import reducer from '../services/reducer';

let store: any;
const initialState: any = {};

store = createStore(reducer, composeWithDevTools());

export default store;

