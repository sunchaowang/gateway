import { ProviderConfigs } from "../types.js";
import PalmApiConfig from "./api.js";
import { PalmChatCompleteConfig, PalmChatCompleteResponseTransform } from "./chatComplete.js";
import { PalmCompleteConfig, PalmCompleteResponseTransform } from "./complete.js";
import { PalmEmbedConfig, PalmEmbedResponseTransform } from "./embed.js";

const PalmAIConfig: ProviderConfigs = {
  complete: PalmCompleteConfig,
  embed: PalmEmbedConfig,
  api: PalmApiConfig,
  chatComplete: PalmChatCompleteConfig,
  responseTransforms: {
    complete: PalmCompleteResponseTransform,
    chatComplete: PalmChatCompleteResponseTransform,
    embed: PalmEmbedResponseTransform
  }
};

export default PalmAIConfig;
