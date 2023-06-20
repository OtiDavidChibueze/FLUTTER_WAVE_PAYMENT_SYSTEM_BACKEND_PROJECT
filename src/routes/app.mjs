import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

export default app;
