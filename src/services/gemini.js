import { GoogleGenerativeAI } from "@google/generative-ai";

import aiConfig from "../config/aiConfig";
import { parseAIResponse } from "./aiResponseParser";
import { retry } from "./retry";
import {
  getAIErrorMessage,
  logAIError,
} from "../utils/aiErrors";





class GeminiService {
  constructor() {
    if (!aiConfig.apiKey) {
      throw new Error(
        "Gemini API Key not found. Please configure VITE_GEMINI_API_KEY."
      );
    }

    this.client = new GoogleGenerativeAI(aiConfig.apiKey);

    this.model = this.client.getGenerativeModel({
      model: aiConfig.model,
      generationConfig: aiConfig.generationConfig,
      safetySettings: aiConfig.safetySettings,
    });
  }

async generate(prompt) {
  if (!prompt?.trim()) {
    throw new Error("Prompt cannot be empty.");
  }

  try {
    return await retry(async () => {
      const result =
        await this.model.generateContent(prompt);

      const response = await result.response;

      const text = response.text();

      if (!text?.trim()) {
        throw new Error("Empty response");
      }

      return parseAIResponse(text);
    });
  } catch (error) {
    logAIError(error);

    throw new Error(getAIErrorMessage(error));
  }
}
}

const geminiService = new GeminiService();

export default geminiService;