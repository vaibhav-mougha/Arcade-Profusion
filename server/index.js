require("dotenv").config();

const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const app = express();
const { connection } = require("./config/db");

const { authRouter } = require("./routes/auth/auth.route");
const { ledgerRouter } = require("./routes/ledger/ledger.route");

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.status(200).json("Welcome to Arcade Profusion");
});

// Routes
app.use("/auth", authRouter); //Registration , Login , Users
app.use("/ledger", ledgerRouter); // Customer Transactions

app.listen(PORT, () => {
  connection();
  console.log(`Server is running at PORT : ${PORT}`);
});
