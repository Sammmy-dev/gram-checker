import express from "express";
import OpenAI from "openai";

// To authenticate with the model you will need to generate a personal access token (PAT) in your GitHub settings. 
// Create your PAT token by following instructions here: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens

const grammarCheck = express.Router();

export async function main(text) {
  console.log('Grammar check main function called with text length:', text.length);
  try {
    // Access the token inside the function to ensure it's loaded
    const token = process.env["GITHUB_TOKEN"];
    
    if (!token) {
      throw new Error("GITHUB_TOKEN is not set in environment variables");
    }
    
    const client = new OpenAI({
      baseURL: "https://models.github.ai/inference",
      apiKey: token
    });

    const response = await client.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that checks and corrects grammar errors in the following text. Only return the corrected text without any additional comments or context.",
        },
        {
          role: "user",
          content: text,
        },
      ],
      model: "openai/gpt-4o-mini",
      temperature: 0.5,
      max_tokens: 4096,
      top_p: 1
    });

    const correctedText = response.choices[0].message.content.trim();
    console.log('Grammar check OpenAI response received');
    return correctedText;
  } catch (error) {
    console.error("Error checking grammar:", error);
    throw error;
  }
}

grammarCheck.post("/", async (req, res) => {
  console.log('Grammar check POST request received');
  const { text } = req.body;
  
  // Validate input
  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }
  
  try {
    const correctedText = await main(text);
    console.log('Grammar check completed successfully');
    res.json({ correctedText });
  } catch (error) {
    console.error("Error checking grammar:", error);
    res.status(500).json({ error: error.message || "Error checking grammar" });
  }
});

export default grammarCheck;