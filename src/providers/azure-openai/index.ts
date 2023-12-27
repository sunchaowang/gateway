import { ProviderConfigs } from "../types.js";
import { AzureOpenAICompleteConfig, AzureOpenAICompleteResponseTransform } from "./complete.js";
import { AzureOpenAIEmbedConfig, AzureOpenAIEmbedResponseTransform } from "./embed.js";
import AzureOpenAIAPIConfig from "./api.js";
import { AzureOpenAIChatCompleteConfig, AzureOpenAIChatCompleteResponseTransform } from "./chatComplete.js";

const AzureOpenAIConfig: ProviderConfigs = {
  complete: AzureOpenAICompleteConfig,
  embed: AzureOpenAIEmbedConfig,
  api: AzureOpenAIAPIConfig,
  chatComplete: AzureOpenAIChatCompleteConfig,
  responseTransforms: {
    complete: AzureOpenAICompleteResponseTransform,
    chatComplete: AzureOpenAIChatCompleteResponseTransform,
    embed: AzureOpenAIEmbedResponseTransform
  }
};

export default AzureOpenAIConfig;
