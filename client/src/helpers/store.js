import { createStore , applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import RootReducers from './redux-reducer/RootReducer.js';



const Store = createStore(RootReducers , composeWithDevTools(applyMiddleware(thunk)))

export default Store