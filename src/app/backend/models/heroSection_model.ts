require("dotenv").config();
import mongoose, { Document, Model, Schema } from "mongoose";

interface IHeroSection extends Document {
  text: string;
  image: {};
  createdAt: Date;
}

const heroSectionSchema:Schema<IHeroSection> = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    image: {},
    createdAt: {
      type: Date,
      default: Date.now,
  },
  }
  
);



export default mongoose.models.HeroSection || mongoose.model("HeroSection", heroSectionSchema);