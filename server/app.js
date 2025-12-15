import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyzeRouter from "./routes/analyze.js";
import grammarCheck from "./routes/grammarChecker.js";
import spellChecker from "./routes/spellChecker.js";

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

//config cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use(express.json()); //for parsing application/json

//routes
app.use("/api/analyze", analyzeRouter);
app.use("/api/grammarcheck", grammarCheck);
app.use("/api/spellcheck", spellChecker);

//start server
app.listen(port, () => {
  console.log(`AI Writing app listening at http://localhost:${port}`);
  console.log(`GITHUB_TOKEN loaded: ${!!process.env.GITHUB_TOKEN}`);
});