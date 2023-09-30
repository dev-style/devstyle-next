require("dotenv").config();
import mongoose, { Document, Model, Schema } from "mongoose";

interface IOrder extends Document {
  number: number;
  description: string;
  status: string;
  initDate: Date;
  endDate: Date;
  createdAt: Date;
}

const orderSchema:Schema<IOrder> = new mongoose.Schema({
  number: { type: Number, required: true },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
  initDate: { type: Date, default: Date.now() },
  endDate: { type: Date },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
