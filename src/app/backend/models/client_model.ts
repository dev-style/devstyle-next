require("dotenv").config();
import mongoose, { Document, Model, Schema } from "mongoose";
import DiffPlugin from "mongoose-history-diff";
import { IClient } from "../lib/interfaces";

const clientSchema: Schema<IClient> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    number: { type: Number, required: true },
    from: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

clientSchema.plugin(DiffPlugin);

export default mongoose.models.Client || mongoose.model("Client", clientSchema);
