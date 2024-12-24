

import { GoogleGenerativeAI } from "@google/generative-ai";

// Get the API key from environment variables
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
console.log("API Key:", apiKey);

// Initialize Google Generative AI with the API key
const genAI = new GoogleGenerativeAI(apiKey);

// Load the generative model
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function generateResponse(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    console.log("Response:", result.response.text());
    return result.response.text();
  } catch (error) {
    console.error("Error generating response:", error);
    return "An error occurred. Please try again.";
  }
}

export default generateResponse;

