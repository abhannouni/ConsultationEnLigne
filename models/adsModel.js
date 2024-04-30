import mongoose from "mongoose";

const adsSchema = mongoose.Schema(
    {
        title: {
        type: String,
        required: true,
        },
        description: {
        type: String,
        required: true,
        },
        price: {
        type: Number,
        required: true,
        },
        image: {
        type: String,
        required: true,
        },
        doctor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
        },
        disponability: [
            {
                from: {
                    type: Date,
                    required: true,
                },
                to: {
                    type: Date,
                    required: true,
                },
                intervall: {
                    type: Number,
                    required: true,
                },
                slots: [
                    {
                        time: {
                            type: Date,
                            required: true,
                        },
                        reserved: {
                            type: Boolean,
                            required: true,
                        },
                        client: {
                            type: mongoose.Schema.Types.ObjectId,
                            ref: "User",
                        },
                    }
                ]
            },
        ],
        hide: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
    }
    );

const Ads = mongoose.model("Ads", adsSchema);