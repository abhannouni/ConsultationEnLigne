import mongoose from "mongoose";

const ChatRoomSchema = new mongoose.Schema(
    {
        members: Array,
    },
    { timestamps: true }
);

const ChatRoom = mongoose.model("ChatRoom", ChatRoomSchema);

export default ChatRoom;
