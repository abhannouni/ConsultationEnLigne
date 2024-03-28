import { Request, Response } from "express";
import ChatRoom from "../models/chatRoomModel";

export const createChatRoom = async (req: Request, res: Response) => {
    const newChatRoom = new ChatRoom({
        members: [req.body.senderId, req.body.receiverId],
    });

    try {
        await newChatRoom.save();
        res.status(201).json(newChatRoom);
    } catch (error: any) {
        res.status(409).json({
            message: error.message,
        });
    }
};

export const getChatRoomOfUser = async (req: Request, res: Response) => {
    try {
        const chatRoom = await ChatRoom.find({
            members: { $in: [req.params.userId] },
        });
        res.status(200).json(chatRoom);
    } catch (error: any) {
        res.status(404).json({
            message: error.message,
        });
    }
};

export const getChatRoomOfUsers = async (req: Request, res: Response) => {
    try {
        const chatRoom = await ChatRoom.find({
            members: { $all: [req.params.firstUserId, req.params.secondUserId] },
        });
        res.status(200).json(chatRoom);
    } catch (error: any) {
        res.status(404).json({
            message: error.message,
        });
    }
};
