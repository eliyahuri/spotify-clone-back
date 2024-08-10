import express from "express";
import router from "./routers/index.router";
import config from "./config/config";
import cors, { type CorsOptions } from "cors";

const app = express();
const corsOptions: CorsOptions = config.cors;

app.use(express.json());
app.use(cors(corsOptions));

app.use("/api", router);

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
