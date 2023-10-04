require("dotenv").config();
import mongoose, { Document, Model, Schema } from "mongoose";
import DiffPlugin from "mongoose-history-diff";
import { IAmbassador } from "../lib/interfaces";

const ambassadorSchema: Schema<IAmbassador> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {},
    social: [
      {
        id: Schema.Types.Number,
        name: String,
        link: String,
      },
    ],
    colors: {
      type: String,
      required: true,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

ambassadorSchema.plugin(DiffPlugin);

export default mongoose.models.Ambassador ||
  mongoose.model("Ambassador", ambassadorSchema);
