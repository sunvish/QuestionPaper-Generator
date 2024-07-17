import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import questionRouter from "./routes/questionRoutes.js";

dotenv.config();

const app = express();
app.get("/", (req, res) => {
  res.send("server is running");
});

app.use(express.json());
app.use(cors());
app.use("/api", questionRouter);

// mongodb connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(
    app.listen(process.env.PORT, () =>
      console.log(`connected to port number ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error.message));
