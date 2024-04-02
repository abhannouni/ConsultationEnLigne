type User = {
    _id: string,
    name: string,
    email: string,
    role: string,
    token: string
}

export const login = (data: User)=> (
    { 
        type: 'LOGIN', 
        payload: data
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