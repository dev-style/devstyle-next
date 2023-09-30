require("dotenv").config();
import mongoose, { Document, Model, Schema } from "mongoose";

interface IAnnouncement extends Document {
  text: string;
  link: string;
  createdAt: Date;
}

const announcementSchema: Schema<IAnnouncement> = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Announcement ||
  mongoose.model("Announcement", announcementSchema);
