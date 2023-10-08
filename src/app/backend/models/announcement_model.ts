require("dotenv").config();
import mongoose, { Document, Model, Schema } from "mongoose";
import DiffPlugin from "mongoose-history-diff";
import { IAnnouncement } from "../lib/interfaces";

const announcementSchema: Schema<IAnnouncement> = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
  },

  { timestamps: true }
);

announcementSchema.plugin(DiffPlugin);

export default mongoose.models.Announcement ||
  mongoose.model("Announcement", announcementSchema);
