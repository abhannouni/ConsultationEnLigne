const initiakState = {
    user: null,
    loading: false,
    error: null,
    };

export default function AuthReducer(state = initiakState, action: any) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                loading: false,
                error: null
            }
        case 'REGISTER':
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null
            }
        default:
            return state;
    }
}