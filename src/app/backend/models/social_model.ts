require("dotenv").config();
import mongoose, { Document, Model, Schema } from "mongoose";
import DiffPlugin from "mongoose-history-diff";
import { ISocial } from "../lib/interfaces";

const socialSchema: Schema<ISocial> = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
      index: true,
      min: 1,
    },
    name: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

socialSchema.plugin(DiffPlugin);

export default mongoose.models.Social || mongoose.model("Social", socialSchema);
