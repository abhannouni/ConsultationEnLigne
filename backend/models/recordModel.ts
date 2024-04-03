import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: Date, required: true },
    symptoms: { type: String, required: true },
    diagnosis: { type: String, required: true },
    prescription: { type: String, required: true },
    followUpDate: { type: Date, required: true },
});

const Record = mongoose.model("Record", recordSchema);

export default Record;