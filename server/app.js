import express from "express";
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
  console.log(`CORS: ${req.method} ${req.url} from ${req.headers.origin || 'no origin'}`);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  if (req.method === 'OPTIONS') {
    console.log('Sending 200 for OPTIONS');
    res.sendStatus(200);
  } else {
    next();
  }
});

app.get("/api/test", (req, res) => res.json({ message: "ok" }));

app.use(express.json()); //for parsing application/json

//routes
app.use("/api/analyze", analyzeRouter);
app.use("/api/grammarcheck", grammarCheck);
app.use("/api/spellcheck", spellChecker);

//start server
app.listen(port, () => {
  console.log(`AI Writing app listening at http://localhost:${port}`);
  console.log(`GITHUB_TOKEN loaded: ${!!process.env.GITHUB_TOKEN}`);
  console.log(`Server started on port ${port}`);
});