import { ProviderConfigs } from "../types.js";
import AnthropicAPIConfig from "./api.js";
import { AnthropicChatCompleteConfig, AnthropicChatCompleteResponseTransform, AnthropicChatCompleteStreamChunkTransform } from "./chatComplete.js";
import { AnthropicCompleteConfig, AnthropicCompleteResponseTransform, AnthropicCompleteStreamChunkTransform } from "./complete.js";

const AnthropicConfig: ProviderConfigs = {
  complete: AnthropicCompleteConfig,
  chatComplete: AnthropicChatCompleteConfig,
  api: AnthropicAPIConfig,
  responseTransforms: {
    'stream-complete': AnthropicCompleteStreamChunkTransform,
    complete: AnthropicCompleteResponseTransform,
    'chatComplete': AnthropicChatCompleteResponseTransform,
    'stream-chatComplete': AnthropicChatCompleteStreamChunkTransform
  }
};

export default AnthropicConfig;
