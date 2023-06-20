import dotenv from "dotenv";
dotenv.config();

export const F_PUBLIC_key = process.env.flutterWave_Public_key;
export const F_SECRET_Key = process.env.flutterWave_Secret_key;
export const F_ENCRYPTION_key = process.env.flutterWave_Encryption_key;
export const PORT = process.env.PORT;
export const DB = process.env.DATABASE;
