
export const login = (email: string, password: string)=> (
    { 
        type: 'LOGIN', 
        payload: { email, password }
    }
)

export const logout = ()=> (
    { 
        type: 'LOGOUT'
    }
)

export const register = (name: string, email: string, password: string, )=> (
    { 
        type: 'REGISTER', 
        payload: { name, email, password }
    }
)