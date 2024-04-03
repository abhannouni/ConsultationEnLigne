import { Request, Response } from "express";
import InfoDoc from "../models/infoDocModel";
import { IinfoDoc, RequestWithUser } from "../types/user";

/**
 * @description Get all infoDoc
 * @route GET /api/infoDoc
 * @access Public
 */

const getInfoDoc = async (req: Request, res: Response) => {
    try {
        const infoDoc = await InfoDoc.find({
            role: "doctor"
          }).populate({
            path: "user",
            select: "-password"
          });
        return res.json(infoDoc);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
}

/**
 * @description Get one infoDoc
 * @route GET /api/infoDoc/:id
 * @access Public
 */

const getOneInfoDoc = async (req: RequestWithUser, res: Response) => {
    try {
        const infoDoc = await InfoDoc.findOne({ user: req.user._id }).populate('user', '-password');
        if (!infoDoc) {
            return res.status(404).json({ error: "InfoDoc not found" });
        }
        return res.json(infoDoc);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
}

/**
 * @description Create new infoDoc
 * @route POST /api/infoDoc
 * @access Private
 */

const createInfoDoc = async (req: RequestWithUser, res: Response) => {
    try {
        console.log(req.user._id);
        
        const infoDoc = new InfoDoc({
            user: req.user._id,
            speciality: req.body.speciality,
            qualification: req.body.qualification,
            experience: req.body.experience,
            fees: req.body.fees,
            phone: req.body.phone,
            address: req.body.address,
            city: req.body.city,
            country: req.body.country,
        });
        const newInfoDoc = await infoDoc.save();
        return res.status(201).json(newInfoDoc);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
}

/**
 * @description Update infoDoc
 * @route PUT /api/infoDoc/:id
 * @access Private
 */

const updateInfoDoc = async (req: Request, res: Response) => {
    try {
        const infoDoc = await InfoDoc.findById(req.params.id);
        if (!infoDoc) {
            return res.status(404).json({ error: "InfoDoc not found" });
        }
        infoDoc.user = req.body.user || infoDoc.user;
        infoDoc.speciality = req.body.speciality || infoDoc.speciality;
        infoDoc.qualification = req.body.qualification || infoDoc.qualification;
        infoDoc.experience = req.body.experience || infoDoc.experience;
        infoDoc.fees = req.body.fees || infoDoc.fees;
        infoDoc.phone = req.body.phone || infoDoc.phone;
        infoDoc.address = req.body.address || infoDoc.address;
        infoDoc.city = req.body.city || infoDoc.city;
        infoDoc.country = req.body.country || infoDoc.country;
        const updatedInfoDoc = await infoDoc.save();
        return res.json(updatedInfoDoc);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
}   

/**
 * @description Delete infoDoc
 * @route DELETE /api/infoDoc/:id
 * @access Private
 */

const deleteInfoDoc = async (req: Request, res: Response) => {
    try {
        const infoDoc = await InfoDoc.findById(req.params.id);
        if (!infoDoc) {
            return res.status(404).json({ error: "InfoDoc not found" });
        }
        await InfoDoc.deleteOne({ _id: req.params.id });
        return res.json({ message: "InfoDoc removed" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
}

export { getInfoDoc, getOneInfoDoc, createInfoDoc, updateInfoDoc, deleteInfoDoc };
