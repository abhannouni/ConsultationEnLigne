import Appointment from "../models/appointmentModel";
import InfoDoc from "../models/infoDocModel";
import { Request, Response } from "express";

/**
 * @description get   Appointment
 * @route /api/Appointments
 * @public
*/

export const getAppointments = async (req: Request, res: Response) => {
    try {
        const { date, doctorId } = req.body;
        console.log(date, doctorId);
        
        
        // Check if doctor exists
        const doctorExists = await InfoDoc.findOne({ _id: doctorId });
        if (!doctorExists) {
            return res.status(404).json({ error: "Doctor not found." });
        }

        // Find appointments by date and doctor ID
        const appointments = await Appointment.find({ 'date': date, 'doctor': doctorId })
            .populate('infoDoc')
            .populate('user', '-password');

        if (appointments.length === 0) {
            return res.status(200).json(appointments);
        }

        res.status(200).json(appointments);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};


/**
 * @description Create a new Appointment
 * @route /api/Appointments
 * @public
*/

export const createAppointment = async (req: Request, res: Response) => {
    const newAppointment = new Appointment(req.body);

    // Add validation checks here
    if (!newAppointment) {
        return res.status(400).json({ message: 'Invalid Appointment data' });
    }

    // Check if the date is already reserved
    const isReserved = await Appointment.exists({ date: newAppointment.date });
    if (isReserved) {
        return res.status(409).json({ message: 'Date is already reserved' });
    }

    // Check with the current date
    const currentDate = new Date();
    const AppointmentDate = new Date(newAppointment.date);

    if (AppointmentDate < currentDate) {
        return res.status(400).json({ message: 'Invalid date' });
    }

    try {
        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (error: any) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

/**
 * @description update Appointment
 * @route /api/Appointments/:id
 * @public
*/

export const updateAppointment = async (req: Request, res: Response) => {
    try {
        await Appointment.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: 'Appointment updated' });
    }
    catch (error: any) {
        res.status(409).json({
            message: error.message,
        });
    }
}

/**
 * @description delete Appointment
 * @route /api/Appointments/:id
 * @public
*/

export const deleteAppointment = async (req: Request, res: Response) => {
    try {
        await Appointment.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Appointment deleted' });
    }
    catch (error: any) {
        res.status(409).json({
            message: error.message,
        });
    }
}