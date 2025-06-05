// const { ChatOllama } = require("@langchain/ollama");
const { ChatPromptTemplate } = require("@langchain/core/prompts");
const { ChatOpenAI } = require("@langchain/openai");
require("dotenv").config();

const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    `You're a senior legal contracts expert with 10+ years of experience. Analyze the following legal document and return your findings in a clean, styled **MDX format** with the following structure:

# Legal Document Analysis

---

## **1. Summary**

---

## **2. Legal Risks or Ambiguities**

---

## **3. Key Clauses and Their Implications**

---

## **4. Risky or Missing Clauses**

---

## **5. Suggestions for Improvement or Negotiation**

---

Respond in a professional, readable, and clean format. Use clear section headers (##), bullet points where needed, and emphasize key terms with bold if appropriate.`,
  ],
  ["human", "{document}"],
]);

// Setup Ollama model
// const ollamaModel = new ChatOllama({
//   baseUrl: "http://localhost:11434",
//   model: "llama3",
// });

const ollama3Model = new ChatOpenAI({
  openAIApiKey: process.env.OPENROUTER_API_KEY,
  modelName: process.env.MODEL_NAME,
  configuration: {
    baseURL: process.env.OPENROUTER_BASE_URL,
  },
});

exports.getPDFAnalysis = async (documentText) => {
  const chain = prompt.pipe(ollama3Model);
  const response = await chain.invoke({ document: documentText });
  return response.content;
};
