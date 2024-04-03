import mongoose from 'mongoose';
import { Request } from 'express';

export interface RequestWithUser extends Request {
  user: any;
}

export type Role = 'admin' | 'doctor' | 'patient';

export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    role: Role;
}

export interface IUserWithId {
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

export interface IinfoDoc {
    user: string;
    speciality: string;
    qualification: string;
    experience: string;
    fees: string;
    phone: string;
    address: string;
    city: string;
    country: string;
}


