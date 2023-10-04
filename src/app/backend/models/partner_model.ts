require("dotenv").config();
import mongoose, { Document, Model, Schema } from "mongoose";
import DiffPlugin from "mongoose-history-diff";
import { IPartner } from "../lib/interfaces";

const partnerSchema: Schema<IPartner> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    logoColor: {},
    logoWhite: {},
    logoBlack: {},
    link: {
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

partnerSchema.plugin(DiffPlugin);

export default mongoose.models.Partner ||
  mongoose.model("Partner", partnerSchema);
