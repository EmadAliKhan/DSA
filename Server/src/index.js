import { app } from "./app";
import connectDB from "./db/DB";
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});
const PORT = 5000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("server is running on port", PORT);
    });
  })
  .catch((error) => {
    console.log("mongoDB connection failed....", error);
  });
