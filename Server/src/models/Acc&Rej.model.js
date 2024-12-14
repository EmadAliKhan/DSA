import mongoose, { Schema } from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    RequestData: {
      type: Schema.Types.ObjectId,
      ref: "request",
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Data = mongoose.model("data", DataSchema);
