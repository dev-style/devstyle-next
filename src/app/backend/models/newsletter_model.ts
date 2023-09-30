require("dotenv").config();
import mongoose, { Document, Model, Schema } from "mongoose";

interface INewsletter extends Document {
  email: string;
  createdAt: Date;
}

const newsletterSchema: Schema<INewsletter> = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Newsletter ||
  mongoose.model("Newsletter", newsletterSchema);
