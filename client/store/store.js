import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { alertReducer } from './reducers/alertReducer';
import { registerReducer } from './reducers/registerReducer';
import { profileReducer } from './reducers/profileReducer';

const initialState = {};

const middleware = [thunk];

const reducer = combineReducers({
    alerts: alertReducer,
    register: registerReducer,
    profile: profileReducer,
});
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;