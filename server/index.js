require("dotenv").config();

const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const app = express();

const { connection } = require("./config/db");

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (reqe, res) => {
  res.send("Welcome to Arcade Profusion");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log({msg:"Connected to the DB !"});
  } catch (error) {
    console.log({error:"Connection Failed !"});
  }
  console.log(`Server is running at PORT : ${PORT}`);
});
