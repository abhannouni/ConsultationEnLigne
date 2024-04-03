import Record from "../models/recordModel";
import { Request, Response } from "express";
import { RequestWithUser } from "../types/user";
import { Irecord } from "../types/record";

/**
 * @description Get all records for a specific user
 * @route GET /api/record/user/:userId
 * @access Public
 */

const getRecordsForUser = async (req: RequestWithUser, res: Response) => {
    try {
        if (req.user.role === 'patient') {
            const records = await Record.find({ user: req.user.id }).populate('user').sort({ date: -1 });
            return res.json(records);
        }else{
            const records = await Record.find({ doctor: req.user.id }).populate('user').sort({ date: -1 });
            return res.json(records);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
}

/**
 * @description Get one record
 * @route GET /api/record/:id
 * @access Public
 */

const getOneRecord = async (req: Request, res: Response) => {
    try {
        const record = await Record.findById(req.params.id).populate('user');
        if (!record) {
            return res.status(404).json({ error: "Record not found" });
        }
        return res.json(record);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
}

/**
 * @description Create new record
 * @route POST /api/record
 * @access Private
 */

const createRecord = async (req: Request, res: Response) => {
    try {
        const record = new Record
        ({
            user: req.body.user,
            doctor: req.body.doctor,
            date: req.body.date,
            symptoms: req.body.symptoms,
            diagnosis: req.body.diagnosis,
            prescription: req.body.prescription,
            followUpDate: req.body.followUpDate,
        });
        const newRecord = await record.save();
        return res.status(201).json(newRecord);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
}

/**
 * @description Update record
 * @route PUT /api/record/:id
 * @access Private
 */

const updateRecord = async (req: Request, res: Response) => {
    try {
        const record = await Record.findByIdAndUpdate(req.params.id
            , req.body
            , { new: true });
        if (!record) {
            return res.status(404).json({ error: "Record not found" });
        }
        return res.json(record);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
}

/**
 * @description Delete record
 * @route DELETE /api/record/:id
 * @access Private
 */

const deleteRecord = async (req: RequestWithUser, res: Response) => {
    try {
        const record = await Record.findById(req.params.id);
        if (!record) {
            return res.status(404).json({ error: "Record not found" });
        }
        
        // Check if the authenticated doctor is the creator of the record
        if (record.doctor.toString() !== req.user.id) {
            return res.status(401).json({ error: "Not authorized to delete this record" });
        }
        
        await record.deleteOne();
        return res.json({ message: "Record removed" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
}

export { getRecordsForUser, getOneRecord, createRecord, updateRecord, deleteRecord };