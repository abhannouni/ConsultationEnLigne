import mongoose from "mongoose";

const infoDocSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    speciality: { type: String, required: true },
    qualification: { type: String, required: true },
    experience: { type: String, required: true },
    fees: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    role: { type: String, required: true, enum: ["doctor","patient"], default: "patient" },
});

const InfoDoc = mongoose.model("InfoDoc", infoDocSchema);

export default InfoDoc;
