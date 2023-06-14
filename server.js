import express from "express";
import { config } from "./db/config.js";
import { personsRoutes } from "./routes/personsRoutes.js";

const app = express();

app.use(express.json());

personsRoutes(app);

app.listen(config.port, () => {
  console.log(`Server is running at port ${config.url}...`);
});
