import mongoose from "mongoose";

const roomSchema = mongoose.Schema(
    {
        members: [
            {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "User",
            },
        ],
    }
);

const Room = mongoose.model("Room", roomSchema);

export default Room;