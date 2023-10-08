require("dotenv").config();
import mongoose, { Document, Model, Schema } from "mongoose";
import DiffPlugin from "mongoose-history-diff";
import { ICollection } from "../lib/interfaces";

const collectionSchema: Schema<ICollection> = new mongoose.Schema(
  {
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
    show: {
      type: Boolean,
      default: false,
    },
  },

  { timestamps: true }
);

collectionSchema.plugin(DiffPlugin);

export default mongoose.models.Collection ||
  mongoose.model("Collection", collectionSchema);
