import { createStore, applyMiddleware } from 'redux';

import Authreducer from './reducers/AuthReducer';

const store = createStore(Authreducer, applyMiddleware());

export default store;