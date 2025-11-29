import { ChatMessage } from '../types';

export const streamChatResponse = async (
  history: ChatMessage[],
  userMessage: string,
  onChunk: (text: string) => void
) => {
  try {
    const response = await fetch("/.netlify/functions/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        history: history.map(h => ({
          role: h.role,
          content: h.content
        })),
        userMessage,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to get response");
    }

    // Simulate streaming by delivering the response in chunks
    const fullResponse = data.response || "";
    const words = fullResponse.split(" ");

    for (let i = 0; i < words.length; i++) {
      const chunk = i === 0 ? words[i] : " " + words[i];
      onChunk(chunk);
      // Small delay to simulate streaming effect
      await new Promise(resolve => setTimeout(resolve, 20));
    }
  } catch (error) {
    console.error("Chat error:", error);
    onChunk("I apologize, but I encountered an error while processing your request. Please try again later.");
  }
};

export const getProgramRecommendation = async (userProfile: Record<string, unknown>): Promise<string> => {
  // This function is currently unused in the UI
  // When needed, create a separate Netlify function for it
  console.warn("getProgramRecommendation is not yet implemented with Netlify functions");
  return "{}";
};
