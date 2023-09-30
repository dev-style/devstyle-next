require("dotenv").config();
import mongoose, { Document, Model, Schema } from "mongoose";


interface IPartner extends Document {
  name: string;
  logoColor: {};
  logoWhite: {};
  logoBlack: {};
  link: string;
  createdAt: Date;
}

const partnerSchema:Schema<IPartner> = new mongoose.Schema(
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
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }

  );

export default mongoose.models.Partner || mongoose.model("Partner", partnerSchema);