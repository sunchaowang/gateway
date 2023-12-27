import { ProviderConfigs } from "../types.js";
import { OpenAICompleteConfig, OpenAICompleteResponseTransform } from "./complete.js";
import { OpenAIEmbedConfig, OpenAIEmbedResponseTransform } from "./embed.js";
import OpenAIAPIConfig from "./api.js";
import { OpenAIChatCompleteConfig, OpenAIChatCompleteResponseTransform } from "./chatComplete.js";

const OpenAIConfig: ProviderConfigs = {
  complete: OpenAICompleteConfig,
  embed: OpenAIEmbedConfig,
  api: OpenAIAPIConfig,
  chatComplete: OpenAIChatCompleteConfig,
  responseTransforms: {
    complete: OpenAICompleteResponseTransform,
    // 'stream-complete': OpenAICompleteResponseTransform,
    chatComplete: OpenAIChatCompleteResponseTransform,
    // 'stream-chatComplete': OpenAIChatCompleteResponseTransform,
    embed: OpenAIEmbedResponseTransform
  }
};

export default OpenAIConfig;
