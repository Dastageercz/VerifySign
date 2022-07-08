import express from "express";
import getMessage from "./verify.js";

const app = express();
const port = 5000;

app.use(express.json());
app.use("/verify", getMessage);

app.get("/", (req, res) => {
  res.send("Test Server");
});

app.listen(port, () => {
  console.log("Ok");
});
