type DoctorInfo = {
    _id: string,
    name: string,
    email: string,
    speciality: string;
    qualification: string;
    experience: string;
    fees: string;
    phone: string;
    address: string;
    city: string;
    country: string;
}

export const getDoctor = (data: DoctorInfo)=> (
    { 
        type: 'GET_DOCTOR', 
        payload: data
    }
)

export const updateDoctor = (data: DoctorInfo)=> (
    { 
        type: 'UPDATE_DOCTOR', 
        payload: data
    }
)

export const createDoctor = (data: DoctorInfo)=> (
    { 
        type: 'CREATE_DOCTOR', 
        payload: data
    }
)

export const deleteDoctor = ()=> (
    { 
        type: 'DELETE_DOCTOR'
    }
)

export const getDoctors = (data: DoctorInfo[])=> (
    { 
        type: 'GET_DOCTORS', 
        payload: data
    }
)