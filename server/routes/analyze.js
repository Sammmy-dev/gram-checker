import express from "express";
import OpenAI from "openai";

// To authenticate with the model you will need to generate a personal access token (PAT) in your GitHub settings. 
// Create your PAT token by following instructions here: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens

const analyzeRouter = express.Router();

export async function main(sentence) {
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
            "You are a helpful assistant that rephrases sentences. Only return the rephrased sentences without any additional comments or context.",
        },
        {
          role: "user",
          content: `${sentence}`,
        },
      ],
      model: "openai/gpt-4o-mini",
      temperature: 0.7,
      max_tokens: 4096,
      top_p: 1,
      n: 3,
    });

    // Extract the rephrased sentences from the response
    const rephrasedSentences = response.choices.map(choice => 
      choice.message.content.trim()
    ).slice(0, 3); // Limit to 3 sentences as in the original

    return rephrasedSentences;
  } catch (error) {
    console.error("Error processing sentence:", error);
    throw error;
  }
}

analyzeRouter.post("/", async (req, res) => {
  const { sentence } = req.body;

  // Validate input
  if (!sentence) {
    return res.status(400).json({ error: "Sentence is required" });
  }
  
  try {
    const rephrasedSentences = await main(sentence);
    res.json({ rephrasedSentences });
  } catch (error) {
    console.error("Error processing sentence:", error);
    res.status(500).json({ error: error.message || "Error processing sentence" });
  }
});

export default analyzeRouter;