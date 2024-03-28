import { Request, Response } from "express";
import ChatMessage from "../models/chatMessageModel";
export const createMessage = async (req: Request, res: Response) => {
    const newMessage = new ChatMessage(req.body);

    try {
        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (error: any) {
        res.status(409).json({
            message: error.message,
        });
    }
};

export const getMessages = async (req: Request, res: Response) => {
    try {
        const messages = await ChatMessage.find({
            chatRoomId: req.params.chatRoomId,
        });
        res.status(200).json(messages);
    } catch (error: any) {
        res.status(409).json({
            message: error.message,
        });
    }
};
