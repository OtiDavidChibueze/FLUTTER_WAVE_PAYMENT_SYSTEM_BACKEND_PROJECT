import mongoose from "mongoose";
import logger from "../config/logger.mjs";
import { DB } from "./keys.mjs";

const connectToDatabase = () => {
  try {
    mongoose.connect(DB, { useUnifiedTopology: true, useNewUrlParser: true });

    logger.info(" connected to database successfully");
  } catch (err) {
    logger.error(`Database Connection -> Error : ${err.message}`);
  }
};

export default connectToDatabase;
