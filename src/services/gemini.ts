import { GoogleGenAI, Type } from "@google/genai";
import { RoleDetails, GeneratedRecruitmentData } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function generateRecruitmentContent(details: RoleDetails): Promise<GeneratedRecruitmentData> {
  const prompt = `
    You are an expert HR consultant and recruitment specialist. 
    Generate a comprehensive recruitment package for the following role:
    
    Job Title: ${details.jobTitle}
    Department: ${details.department}
    Experience Level: ${details.experienceLevel}
    Location: ${details.location}
    Employment Type: ${details.employmentType}
    Company Name: ${details.companyName}
    Company Culture: ${details.companyCulture}
    Industry: ${details.industry}
    Key Responsibilities: ${details.keyResponsibilities}
    Required Skills: ${details.requiredSkills}

    The package must include:
    1. A polished Job Description (Summary, Responsibilities, Requirements, Benefits, Culture Statement).
    2. Screening Criteria (Must-have, Nice-to-have, Red Flags).
    3. Interview Questions (Technical, Behavioral, Culture Fit) with expected answers.
    4. An Evaluation Rubric (Categories, Criteria, and descriptions for scores 1, 3, and 5).
    5. A Compliance & Diversity Check (Ensuring inclusive language and legal standards).

    Ensure the tone is professional, inclusive, and aligned with the company culture.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          jobDescription: {
            type: Type.OBJECT,
            properties: {
              summary: { type: Type.STRING },
              responsibilities: { type: Type.ARRAY, items: { type: Type.STRING } },
              requirements: { type: Type.ARRAY, items: { type: Type.STRING } },
              benefits: { type: Type.ARRAY, items: { type: Type.STRING } },
              cultureStatement: { type: Type.STRING },
            },
            required: ["summary", "responsibilities", "requirements", "benefits", "cultureStatement"],
          },
          screeningCriteria: {
            type: Type.OBJECT,
            properties: {
              mustHave: { type: Type.ARRAY, items: { type: Type.STRING } },
              niceToHave: { type: Type.ARRAY, items: { type: Type.STRING } },
              redFlags: { type: Type.ARRAY, items: { type: Type.STRING } },
            },
            required: ["mustHave", "niceToHave", "redFlags"],
          },
          interviewQuestions: {
            type: Type.OBJECT,
            properties: {
              technical: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    question: { type: Type.STRING },
                    expectedAnswer: { type: Type.STRING },
                  },
                  required: ["question", "expectedAnswer"],
                },
              },
              behavioral: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    question: { type: Type.STRING },
                    expectedAnswer: { type: Type.STRING },
                  },
                  required: ["question", "expectedAnswer"],
                },
              },
              cultureFit: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    question: { type: Type.STRING },
                    expectedAnswer: { type: Type.STRING },
                  },
                  required: ["question", "expectedAnswer"],
                },
              },
            },
            required: ["technical", "behavioral", "cultureFit"],
          },
          evaluationRubric: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                category: { type: Type.STRING },
                criteria: { type: Type.STRING },
                score1: { type: Type.STRING },
                score3: { type: Type.STRING },
                score5: { type: Type.STRING },
              },
              required: ["category", "criteria", "score1", "score3", "score5"],
            },
          },
          complianceCheck: {
            type: Type.OBJECT,
            properties: {
              status: { type: Type.STRING, enum: ["compliant", "warning"] },
              suggestions: { type: Type.ARRAY, items: { type: Type.STRING } },
            },
            required: ["status", "suggestions"],
          },
        },
        required: ["jobDescription", "screeningCriteria", "interviewQuestions", "evaluationRubric", "complianceCheck"],
      },
    },
  });

  return JSON.parse(response.text);
}
