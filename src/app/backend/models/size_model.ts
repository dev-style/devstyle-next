require("dotenv").config();
import mongoose, { Document, Model, Schema } from "mongoose";

interface ISize extends Document {
  size: string;
  createdAt: Date;
}

const sizeSchema:Schema<ISize> = new mongoose.Schema({
  size: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.models.Size || mongoose.model("Size", sizeSchema);


