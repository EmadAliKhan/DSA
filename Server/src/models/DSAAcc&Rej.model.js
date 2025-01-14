// import mongoose, { Schema } from "mongoose";

// const DSASchema = new mongoose.Schema(
//   {
//     CharimanData: {
//       type: Schema.Types.ObjectId,
//       ref: "data",
//       required: true,
//     },
//     status: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// export const DSA = mongoose.model("DSA", DSASchema);
import mongoose, { Schema } from "mongoose";

const DSASchema = new mongoose.Schema(
  {
    SocietyName: {
      type: String,
      required: true,
    },
    LeadName: {
      type: String,
      required: true,
    },
    Department: {
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
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const DSA = mongoose.model("DSA", DSASchema);