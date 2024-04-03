import mongoose from 'mongoose';

export interface Irecord {
    user: mongoose.Types.ObjectId;
    doctor: mongoose.Types.ObjectId;
    date: Date;
    symptoms: string;
    diagnosis: string;
    prescription: string;
    followUpDate: Date;
}