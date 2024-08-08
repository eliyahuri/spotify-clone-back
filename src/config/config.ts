import dotenv from "dotenv";
import envVar from "env-var";
import type { Config } from "./types";
dotenv.config();

const config: Config = {
  port: envVar.get("PORT").required().asPortNumber(),
  cors: {
    origin: envVar.get("CORS_ORIGIN").required().asString(),
    optionsSuccessStatus: envVar
      .get("CORS_OPTIONS_SUCCESS_STATUS")
      .required()
      .asInt(),
  },
};

export default config;
