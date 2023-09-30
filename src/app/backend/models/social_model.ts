require("dotenv").config();
import mongoose, { Document, Model, Schema } from "mongoose";

interface ISocial extends Document {
  id: number;
  name: string;
  createdAt: Date;
}

const socialSchema:Schema<ISocial> = new mongoose.Schema(
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
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
);

export default mongoose.models.Social || mongoose.model("Social", socialSchema);