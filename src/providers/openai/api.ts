import { ProviderAPIConfig } from "../types.js";

const OpenAIAPIConfig: ProviderAPIConfig = {
  baseURL: "https://api.openai.com/v1",
  headers: (API_KEY:string) => {
    return {"Authorization": `Bearer ${API_KEY}`}
  },
  complete: "/completions",
  chatComplete: "/chat/completions",
  embed: "/embeddings"
};

export default OpenAIAPIConfig;
