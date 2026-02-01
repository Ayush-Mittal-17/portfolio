
import { GoogleGenAI } from "@google/genai";
import { PROFILE } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIResponse = async (userMessage: string) => {
  if (!process.env.API_KEY) {
    return "I'm sorry, my AI brain isn't connected right now (missing API key). But you can read all about Ayush on the page!";
  }

  const systemInstruction = `
    You are the AI Assistant for ${PROFILE.name}. 
    Your job is to answer questions about ${PROFILE.name}'s professional background, skills, and projects based on the following profile data:
    
    Name: ${PROFILE.name}
    Title: ${PROFILE.title}
    Bio: ${PROFILE.bio}
    Location: ${PROFILE.location}
    Skills: ${PROFILE.skills.map(s => `${s.name} (${s.level}%)`).join(", ")}
    Experience: ${PROFILE.experiences.map(e => `${e.role} at ${e.company} (${e.period})`).join("; ")}
    Recent Projects: ${PROFILE.projects.map(p => p.title).join(", ")}

    Rules:
    - Be professional, friendly, and helpful.
    - If you don't know the answer based on the provided data, suggest the user contact ${PROFILE.name} directly via email: ${PROFILE.email}.
    - Keep responses concise (under 3 sentences unless asked for detail).
    - Always refer to ${PROFILE.name} in the third person or as "my creator".
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I'm having trouble thinking right now. Please try again!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong. Let's try that again!";
  }
};
