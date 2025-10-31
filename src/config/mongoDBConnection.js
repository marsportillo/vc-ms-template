import mongoose from "mongoose";

export async function connectDatabase(uri) {
  try {
    await mongoose.connect(uri);
    console.log("[vc-ms-template] ✅ MongoDB connected");
  } catch (error) {
    console.error("[vc-ms-template] ❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
}