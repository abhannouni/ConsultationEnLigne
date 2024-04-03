import Appointment from "../models/appointmentModel";
import InfoDoc from "../models/infoDocModel";
import { Request, Response } from "express";
import { RequestWithUser } from "../types/user";

/**
 * @description get   Appointment
 * @route /api/Appointments
 * @public
*/

export const getAppointments = async (req: Request, res: Response) => {
    try {
        const { date, doctorId } = req.query as { date: string, doctorId: string };
        
        
        // Check if doctor exists
        const doctorExists = await InfoDoc.findOne({ user: doctorId});
        if (!doctorExists) {
            return res.status(404).json({ error: "Doctor not found." });
        }

        // Find appointments by date and doctor ID
        const appointments = await Appointment.find({ 'date': date, 'doctor': doctorId })

        console.log(appointments);
        
        if (appointments.length === 0) {
            return res.status(200).json({ message: 'No appointments found' });
        }

        res.status(200).json(appointments);
    } catch (error: any) {
        // res.status(500).json({ message: error.message });
    }
};


/**
 * @description Create a new Appointment
 * @route /api/Appointments
 * @public
*/

export const createAppointment = async (req: RequestWithUser, res: Response) => {
    // Add validation checks here
    if (!req.body.selectedDate || !req.body.id || !req.body.time) {
        return res.status(400).json({ message: 'Invalid Appointment data' });
    }

    // Check if the date is already reserved
    const isReserved = await Appointment.exists({ date: req.body.selectedDate });
    if (isReserved) {
        return res.status(409).json({ message: 'Date is already reserved' });
    }

    // Check with the current date
    const currentDate = new Date();
    const newDate = new Date(req.body.selectedDate);
    if (newDate < currentDate) {
        return res.status(400).json({ message: 'Invalid date' });
    }
    try {
        const newAppointment = new Appointment({
            date: newDate, // Store as a Date object
            time: req.body.time,
            doctor: req.body.id,
            user: req.user._id,
            createdAt: currentDate,
        });
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