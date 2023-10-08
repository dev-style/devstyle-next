require("dotenv").config();
import mongoose, { Document, Model, Schema } from "mongoose";
import DiffPlugin from "mongoose-history-diff";
import { INewsletter } from "../lib/interfaces";

const newsletterSchema: Schema<INewsletter> = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

newsletterSchema.plugin(DiffPlugin);

export default mongoose.models.Newsletter ||
  mongoose.model("Newsletter", newsletterSchema);
