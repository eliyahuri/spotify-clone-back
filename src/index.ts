import express from "express";
import router from "./routers";

const app = express();
const port = 4000;
app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
