import express from "express";

import { homeController } from "./home/server";

const app = express();

app.get("/", homeController);

app.listen(5656, () =>
  console.log("server is running on http://localhost:5656")
);
