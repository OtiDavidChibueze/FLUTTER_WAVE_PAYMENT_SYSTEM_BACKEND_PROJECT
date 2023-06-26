// FLUTTER PAYMENT APPLICATION
import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import ResponseHelper from "../util/responseHelper.mjs";
import logger from "../config/logger.mjs";
const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

// ROUTES
import payment_Routes from "../routes/payment.mjs";

app.use("/api/v3/flutterwave", payment_Routes);

app.get("/api/v3/callback", (req, res) => {
  logger.info(`payment success: ${req.body}`);
  return ResponseHelper.successResponse(res, 200, "transaction made successfully "); // Respond with a success status
});

export default app;
