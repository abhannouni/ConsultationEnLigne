import mongoose from "mongoose";

export interface IAppointment {
    user: mongoose.Schema.Types.ObjectId;
    doctor: mongoose.Schema.Types.ObjectId;
    date: string;
    time: string;
    status: string;
    description: string;
}

const AppointmentSchema = new mongoose.Schema<IAppointment>({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
}, {
    timestamps: true
});

AppointmentSchema.methods.isValid = function() {
    if (!this.user || !this.doctor || !this.date || !this.time) {
        return false;
    }
    return true;
};

const Appointment = mongoose.model<IAppointment>('Appointment', AppointmentSchema);

export default Appointment;