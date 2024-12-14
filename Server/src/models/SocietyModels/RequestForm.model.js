import mongoose, { Schema } from "mongoose";

const RequestSchema = new mongoose.Schema(
  {
    SocietyName: {
      type: String,
      required: true,
    },
    LeadName: {
      type: String,
      required: true,
    },
    EventName: {
      type: String,
      required: true,
    },
    EventDate: {
      type: Date,
      required: true,
    },
    Location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Request = mongoose.model("request", RequestSchema);
