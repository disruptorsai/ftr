import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY || ''; // In a real app, ensure this is set
    if (apiKey) {
      aiClient = new GoogleGenAI({ apiKey });
    } else {
      console.warn("API Key not found for Gemini.");
    }
  }
  return aiClient;
};

export const streamChatResponse = async (
  history: ChatMessage[],
  userMessage: string,
  onChunk: (text: string) => void
) => {
  const client = getAiClient();
  if (!client) {
    onChunk("I'm sorry, but I'm having trouble connecting to my brain right now. Please check the API key configuration.");
    return;
  }

  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `You are the empathetic, helpful, and knowledgeable AI Assistant for Fit2Recover (fit2recover.org), a nonprofit recovery community center in Utah.
    
    Key Context:
    - Mission: To provide a safe place for people in recovery to connect through Fitness, Nutrition, Creative Arts, and Community Service.
    - Locations: Salt Lake City (Main & Annex), Provo, Park City, Heber City.
    - Core Values: Connection, Support, Empowerment, Service.
    
    Tone: Warm, encouraging, non-judgmental, professional but accessible.
    
    Guidelines:
    - Briefly answer questions about schedules, programs, and locations.
    - If someone asks about specific medical advice or crisis support, gently direct them to professional medical services or crisis hotlines (988), but mention Fit2Recover is a supportive community.
    - Keep responses concise (under 150 words usually).
    - Use "We" when referring to the organization.
    `;

    const chat = client.chats.create({
      model,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role === 'model' ? 'model' : 'user',
        parts: [{ text: h.content }]
      }))
    });

    const result = await chat.sendMessageStream({ message: userMessage });

    for await (const chunk of result) {
        if (chunk.text) {
            onChunk(chunk.text);
        }
    }
  } catch (error) {
    console.error("Gemini Error:", error);
    onChunk("I apologize, but I encountered an error while processing your request. Please try again later.");
  }
};

export const getProgramRecommendation = async (userProfile: any): Promise<string> => {
     const client = getAiClient();
     if(!client) return "Unable to generate recommendations.";

     try {
         const prompt = `Based on this user profile, recommend 2 specific Fit2Recover programs:
         ${JSON.stringify(userProfile)}
         
         Available Pillars: Fitness, Nutrition, Creative Arts, Community Service.
         Return the response as a valid JSON object with an array 'recommendations' containing objects with 'title', 'reason', and 'pillar'.`;

         const response = await client.models.generateContent({
             model: 'gemini-2.5-flash',
             contents: prompt,
             config: { responseMimeType: 'application/json' }
         });

         return response.text || "{}";
     } catch (e) {
         console.error(e);
         return "{}";
     }
}
