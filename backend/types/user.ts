export type Role = 'admin' | 'doctor' | 'patient';

export interface IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    role: Role;
}

export interface ILoginUser {
    email: string;
    password: string;
}

