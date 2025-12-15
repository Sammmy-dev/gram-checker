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

// Custom CORS middleware to ensure headers are always set
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Max-Age', '86400'); // 24 hours
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  next();
});

app.get("/api/test", (req, res) => res.json({ message: "ok" }));

app.use(express.json()); //for parsing application/json

//routes
app.use("/api/analyze", analyzeRouter);
app.use("/api/grammarcheck", grammarCheck);
app.use("/api/spellcheck", spellChecker);

// Global error handler
app.use((err, req, res, next) => {
  // Ensure CORS headers are set even in error responses
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

//start server
app.listen(port, () => {
  console.log(`AI Writing app listening at http://localhost:${port}`);
  console.log(`GITHUB_TOKEN loaded: ${!!process.env.GITHUB_TOKEN}`);
  console.log(`Server started on port ${port}`);
});