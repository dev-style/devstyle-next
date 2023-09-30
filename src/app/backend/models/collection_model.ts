require("dotenv").config()
import mongoose, { Document, Model, Schema } from "mongoose"

interface ICollection extends Document {
    title: string;
    slug: string;
    colors: string;
    image: {};
    views: number;
    createdAt: Date
}

const collectionSchema: Schema<ICollection> = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    colors: {
        type: String,
        required: true,
    },
    image: {},
    views: Number,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
export default mongoose.models.Collection ||
    mongoose.model("Collection", collectionSchema);
