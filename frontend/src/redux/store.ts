import { createStore, applyMiddleware, combineReducers } from 'redux';

import Authreducer from './reducers/AuthReducer';
import ChatReducer from './reducers/ChatReducer';
import DoctorReducer from './reducers/DoctorReducer';
import AppointmentReducer from './reducers/AppointmentReducer';
import { thunk } from 'redux-thunk';
export type RootState = ReturnType<typeof rootReducer>;
const rootReducer = combineReducers({
    auth: Authreducer,
    chat: ChatReducer,
    Doctors: DoctorReducer,
    Appointment: AppointmentReducer,
});
// @ts-ignore
export const store = createStore(rootReducer, applyMiddleware(thunk));