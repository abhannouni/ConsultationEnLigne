import mongoose from "mongoose";

const chatSchema = mongoose.Schema(
    {
        message: {
        type: String,
        required: true,
        },
        sender: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
        },
        receiver: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
        },
    },
    {
        timestamps: true,
    }
    );

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;