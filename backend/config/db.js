import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
  try {
    // Connect to the MongoDB database
    const conn = await mongoose.connect(ENV_VARS.MONGO_URI, {
      
      serverSelectionTimeoutMS: 10000, 
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); 
  }
};
//4zPejf2VaiugyLSq