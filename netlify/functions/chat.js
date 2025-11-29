const { GoogleGenAI } = require("@google/genai");

const SYSTEM_INSTRUCTION = `You are the empathetic, helpful, and knowledgeable AI Assistant for Fit2Recover (fit2recover.org), a nonprofit recovery community center in Utah.

Key Context:
- Mission: To provide a safe place for people in recovery to connect through Fitness, Nutrition, Creative Arts, and Community Service.
- Locations: Salt Lake City (Main & Annex), Provo, Park City, Heber City.
- Core Values: Connection, Support, Empowerment, Service.

Tone: Warm, encouraging, non-judgmental, professional but accessible.

Guidelines:
- Briefly answer questions about schedules, programs, and locations.
- If someone asks about specific medical advice or crisis support, gently direct them to professional medical services or crisis hotlines (988), but mention Fit2Recover is a supportive community.
- Keep responses concise (under 150 words usually).
- Use "We" when referring to the organization.`;

exports.handler = async (event, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { history, userMessage } = JSON.parse(event.body || "{}");

    if (!userMessage) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Missing 'userMessage' in request body" }),
      };
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "GEMINI_API_KEY is not configured on the server" }),
      };
    }

    const client = new GoogleGenAI({ apiKey });

    const chat = client.chats.create({
      model: "gemini-2.0-flash",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: (history || []).map((h) => ({
        role: h.role === "model" ? "model" : "user",
        parts: [{ text: h.content }],
      })),
    });

    const result = await chat.sendMessage({ message: userMessage });
    const responseText = result.text || "";

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ response: responseText }),
    };
  } catch (error) {
    console.error("Gemini API error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "Failed to get AI response",
        detail: error.message,
      }),
    };
  }
};
