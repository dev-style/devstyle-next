require("dotenv").config()
import mongoose, { Document, Model, Schema } from "mongoose"

export interface IGoodie extends Document {
    name: string;
    slug: string;
    fromCollection: mongoose.Schema.Types.ObjectId;
    promoPercentage: number;
    price: number;
    inPromo: boolean;
    views: number;
    size: Array<Object>,
    images: Array<{
        public_id: string,
        url: string
    }>;
    availableColors: Array<string>,
    backgroundColors: Array<string>,
    likes: number;
    createdAt: any


}


const goodieSchema: Schema<IGoodie> = new mongoose.Schema(
    {

        name: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
        },
        fromCollection: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Collection",
            required: true,
        },
        promoPercentage: {
            type: Number,
        },
        price: {
            type: Number,
            required: true,
        },
        inPromo: {
            type: Boolean,
            required: true,
        },
        views: {
            type: Number,
        },
        size: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Size",
                required: true,
            },
        ],
        images: [
            {
                public_id: {
                    type: String,
                },
                url: {
                    type: String,
                },
            },
        ],
        availableColors: [String],
        backgroundColors: [String],

        likes: {
            type: Number,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },

    }
)

export default mongoose.models.Goodie || mongoose.model("Goodie", goodieSchema)