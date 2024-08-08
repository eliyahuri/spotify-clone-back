import express from "express";
import router from "./routers";
import config from "./config/config";
import cors, { type CorsOptions } from "cors";

const app = express();
const corsOptions: CorsOptions = config.cors;

app.use(express.json());
app.use(cors(corsOptions));

app.use("/", router);

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
