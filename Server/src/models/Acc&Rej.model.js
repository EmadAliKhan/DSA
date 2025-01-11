// import mongoose, { Schema } from "mongoose";

// const DataSchema = new mongoose.Schema(
//   {
//     RequestData: {
//       type: Schema.Types.ObjectId,
//       ref: "Request",
//       required: true,
//     },
//     status: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// export const Data = mongoose.model("data", DataSchema);
import mongoose, { Schema } from "mongoose";

const DataSchema = new mongoose.Schema(
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

export const Data = mongoose.model("data", DataSchema);
