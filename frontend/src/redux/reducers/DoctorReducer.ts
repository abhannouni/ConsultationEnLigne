const initiakState = {
    doctors: null,
    doctor: null,
    loading: false,
    error: null,
    };

export default function DoctorReducer(state = initiakState, action: any) {
    switch (action.type) {
        case 'GET_DOCTORS':
            return {
                ...state,
                doctors: action.payload,
                loading: false,
                error: null
            }
        case 'DOCTORS_ERROR':
            return {
                ...state,
                doctors: null,
                loading: false,
                error: action.payload
            }
        case 'CREATE_DOCTOR':
            return {
                ...state,
                doctors: action.payload,
                loading: false,
                error: null
            }
        case 'GET_DOCTOR':
            return {
                ...state,
                doctor: action.payload,
                loading: false,
                error: null
            }
        case 'UPDATE_DOCTOR':
            return {
                ...state,
                doctors: action.payload,
                loading: false,
                error: null
            }
        case 'DELETE_DOCTOR':
            return {
                ...state,
                doctors: null,
                loading: false,
                error: null
            }
        default:
            return state;
    }
}