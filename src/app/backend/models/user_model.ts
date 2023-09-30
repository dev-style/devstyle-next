require("dotenv").config();
import mongoose, { Document, Model, Schema } from "mongoose";

interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  password: string;
  role: string;
  createdAt: Date;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: Number,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);


