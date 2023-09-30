require("dotenv").config();
import mongoose, { Document, Model, Schema } from "mongoose";


interface IClient extends Document {
  name: string;
  number: number;
  from: string;
  createdAt: Date;
}

const clientSchema:Schema<IClient> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: { type: Number, required: true },
  from: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Client || mongoose.model("Client", clientSchema);
