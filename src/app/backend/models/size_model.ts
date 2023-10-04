require("dotenv").config();
import mongoose, { Document, Model, Schema } from "mongoose";
import DiffPlugin from "mongoose-history-diff";
import { ISize } from "../lib/interfaces";

const sizeSchema: Schema<ISize> = new mongoose.Schema(
  {
    size: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

sizeSchema.plugin(DiffPlugin);

export default mongoose.models.Size || mongoose.model("Size", sizeSchema);
