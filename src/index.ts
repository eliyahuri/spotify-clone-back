import express from "express";
import router from "./routers";
import config from "./config/config";

const app = express();

app.use(express.json());

app.use("/", router);

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
