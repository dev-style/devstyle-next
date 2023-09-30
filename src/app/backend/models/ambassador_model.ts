require("dotenv").config();
import mongoose, { Document, Model, Schema } from "mongoose";

interface IAmbassador extends Document {
  name: string;
  image: {};
  social: Array<{
    id: number;
    name: string;
    link: string;
  }>;
  colors: string;
  createdAt: Date;
}

const ambassadorSchema: Schema<IAmbassador> = new mongoose.Schema({
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Ambassador ||
  mongoose.model("Ambassador", ambassadorSchema);
