import Room from "../models/roomModel.js";

export const createChatRoom = async (req, res) => {
    const newChatRoom = new Room({
      members: [req.body.senderId, req.body.receiverId],
    });
  
    try {
      await newChatRoom.save();
      res.status(201).json(newChatRoom);
    } catch (error) {
      res.status(409).json({
        message: error.message,
      });
    }
  };

export const getChatRoom = async (req, res) => {
    try {
      const chatRooms = await Room.find({
        members: { $in: [req.params.userId] },
      });
      res.status(200).json(chatRooms);
    } catch (error) {
      res.status(409).json({
        message: error.message,
      });
    }
  };

  export const getChatRooms = async (req, res) => {
    try {
      const chatRoom = await Room.findOne({
        members: { $all: [req.params.firstUserId, req.params.secondUserId] },
      });
      res.status(200).json(chatRoom);
    } catch (error) {
      res.status(409).json({
        message: error.message,
      });
    }
  };
