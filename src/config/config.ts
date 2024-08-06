import dotenv from "dotenv";
import envVar from "env-var";
import type { Config } from "./types";
dotenv.config();

const config: Config = {
  port: envVar.get("PORT").required().asPortNumber(),
};

export default config;
