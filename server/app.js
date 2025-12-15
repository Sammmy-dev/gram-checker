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
app.use(cors({
  origin: 'https://gram-checker.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
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