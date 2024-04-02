const initiakState = {
    user: null,
    loading: false,
    error: null,
    };

export default function AuthReducer(state = initiakState, action: any) {
    switch (action.type) {
        case 'LOGIN':
            const { token , ...user } = action.payload;
            const expires = (Date.now() + 30 * 24 * 60 * 60 * 1000).toString();
            localStorage.setItem('user', JSON.stringify({
                user
            }));
            localStorage.setItem("expiresAt", expires);
            localStorage.setItem('token', token);
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null
            }
        case 'LOGOUT':
            localStorage.removeItem("user");
            localStorage.removeItem("expiresAt");
            localStorage.removeItem("token");
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