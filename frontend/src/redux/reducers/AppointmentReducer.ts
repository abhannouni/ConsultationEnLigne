const intialState = {
    appointments: [],
    loading: true,
    error: null,
    };

export default function AppointmentReducer(state = intialState, action: any) {
    switch (action.type) {
        case 'GET_APPOINTMENTS':
            return {
                ...state,
                appointments: action.payload,
                loading: false,
                error: null
            }
        case 'APPOINTMENTS_ERROR':
            return {
                ...state,
                appointments: null,
                loading: false,
                error: action.payload
            }
        case 'CREATE_APPOINTMENT':
            return {
                ...state,
                appointments: action.payload,
                loading: false,
                error: null
            }
        case 'GET_APPOINTMENT':
            return {
                ...state,
                appointment: action.payload,
                loading: false,
                error: null
            }
        case 'UPDATE_APPOINTMENT':
            return {
                ...state,
                appointments: action.payload,
                loading: false,
                error: null
            }
        case 'DELETE_APPOINTMENT':
            return {
                ...state,
                appointments: null,
                loading: false,
                error: null
            }
        default:
            return state;
    }
}
