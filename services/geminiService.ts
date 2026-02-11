
import { GoogleGenAI, Type } from "@google/genai";
import { PlayItem, LineAnalysis, StudyMode } from "../types";

// Initialize the Google GenAI client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Analyze a specific line of the play using Gemini
// Fix: Changed Line type to PlayItem as Line was not exported from types.ts
export const getLineAnalysis = async (line: PlayItem, context: string, mode: StudyMode): Promise<LineAnalysis> => {
  // Select model based on depth of study required
  const modelName = mode === 'depth' ? 'gemini-3-pro-preview' : 'gemini-3-flash-preview';
  
  const systemInstruction = `You are an expert Shakespearean scholar specializing in Julius Caesar. 
  Provide analysis for the given line of text.
  If mode is 'student', keep explanations extremely simple (ELI15).
  If mode is 'depth', provide advanced scholarly insights and deep literary analysis.
  Otherwise, provide a standard academic explanation.`;

  const prompt = `Analyze this line from Julius Caesar:
  Speaker: ${line.speaker}
  Line: "${line.text}"
  Surrounding Context: "${context}"
  Study Mode: ${mode}
  
  Please provide the response in valid JSON format.`;

  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            translation: { type: Type.STRING, description: "A modern English translation" },
            intent: { type: Type.STRING, description: "Why the character says this" },
            tone: { type: Type.STRING, description: "The emotional tone of the speaker" },
            symbolism: { type: Type.STRING, description: "Literary devices or symbolism used" },
            historicalContext: { type: Type.STRING, description: "Relevant Roman historical context" },
            examSignificance: { type: Type.STRING, description: "Why this line is important for exams" }
          },
          required: ["translation", "intent", "tone", "symbolism", "examSignificance"]
        }
      }
    });

    // Access the .text property directly from the response (it's a getter, not a method)
    const result = JSON.parse(response.text || '{}');
    return result as LineAnalysis;
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback data if API fails or isn't available
    return {
      translation: "A modern version of the text will appear here.",
      intent: "The character's motivation for speaking this line.",
      tone: "The emotional state of the character.",
      symbolism: "Metaphors, similes, or other literary devices.",
      examSignificance: "Key points to remember for your English literature exam."
    };
  }
};
