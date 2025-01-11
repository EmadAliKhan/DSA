import { app } from "./app.js"; // Default export from app.js
import connectDB from "./db/DB.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env", // Ensure the correct path to your .env file
});

const PORT = process.env.PORT || 5000; // Use PORT from .env or fallback to 5000

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed: ", error);
  });
