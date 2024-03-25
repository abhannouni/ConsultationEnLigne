import { createStore, applyMiddleware, combineReducers } from 'redux';

import Authreducer from './reducers/AuthReducer';
import { thunk } from 'redux-thunk';
const rootReducer = combineReducers({
    auth: Authreducer,
});
// @ts-ignore
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;