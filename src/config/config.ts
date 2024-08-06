import dotenv from "dotenv";
import envVar from "env-var";
dotenv.config();
type Config = {
  port: number;
};

const config: Config = {
  port: envVar.get("PORT").required().asPortNumber(),
};

export default config;
