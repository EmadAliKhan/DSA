import mongoose, { Schema } from "mongoose";

const DSASchema = new mongoose.Schema(
  {
    CharimanData: {
      type: Schema.Types.ObjectId,
      ref: "data",
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const DSA = mongoose.model("DSA", DSASchema);
