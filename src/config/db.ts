const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const ConnectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI ?? "";
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected...");
  } catch (error: any) {
    console.log(error?.message);
    process.exit(1);
  }
};

export default ConnectDB;
