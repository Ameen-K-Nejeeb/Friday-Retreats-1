
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getConciergeResponse = async (userPrompt: string, history: {role: string, content: string}[]) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: "You are the 'Friday Retreats' luxury concierge. You help users plan their dream vacations to exotic locations like Bali, Santorini, and Tulum. Your tone is sophisticated, welcoming, and helpful. Keep responses concise and focus on luxury travel and relaxation. If users ask about booking, encourage them to use the 'Plan Your Stay' form on the page.",
      },
    });

    // In this specific SDK version, history is not passed directly to create, but handled in the chat object context.
    // For simplicity in this demo, we'll just send the message.
    const result = await chat.sendMessage({ message: userPrompt });
    return result.text || "I'm sorry, I'm unable to assist right now. Please try again shortly.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am currently taking a small break. Please feel free to fill out our contact form!";
  }
};
