export const getAppointment = (data: any)=> (
    { 
        type: 'GET_APPOINTMENT', 
        payload: data
    }
)

export const updateAppointment = (data: any)=> (
    { 
        type: 'UPDATE_APPOINTMENT', 
        payload: data
    }
)

export const createAppointment = (data: any)=> (
    { 
        type: 'CREATE_APPOINTMENT', 
        payload: data
    }
)

export const deleteAppointment = ()=> (
    { 
        type: 'DELETE_APPOINTMENT'
    }
)
