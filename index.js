import express from "express";
import { connectDB } from "./config/db.js";
const app = express();

connectDB();
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(process.env.PORT, () => {
  console.log(`app started on post ${process.env.PORT}`);
});
