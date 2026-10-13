import { config } from "dotenv";
import { resolve } from "path";

const nodeEnv = process.env.NODE_ENV || "development";
config({ path: resolve(process.cwd(), `.env.${nodeEnv}`) });

const env = {
  NODE_ENV: nodeEnv,
  DATABASE_URL: process.env.DATABASE_URL,
  APP_URL: process.env.APP_URL || "http://localhost:3001",
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET,
};

if (!env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in .env file");
}

export default env;