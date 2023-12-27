import { ProviderConfigs } from "../types.js";
import AnyscaleAPIConfig from "./api.js";
import { AnyscaleChatCompleteConfig, AnyscaleChatCompleteResponseTransform, AnyscaleChatCompleteStreamChunkTransform } from "./chatComplete.js";
import { AnyscaleCompleteConfig, AnyscaleCompleteResponseTransform, AnyscaleCompleteStreamChunkTransform } from "./complete.js";
import { AnyscaleEmbedConfig, AnyscaleEmbedResponseTransform } from "./embed.js";

const AnyscaleConfig: ProviderConfigs = {
  complete: AnyscaleCompleteConfig,
  chatComplete: AnyscaleChatCompleteConfig,
  embed: AnyscaleEmbedConfig,
  api: AnyscaleAPIConfig,
  responseTransforms: {
    'stream-complete': AnyscaleCompleteStreamChunkTransform,
    'complete': AnyscaleCompleteResponseTransform,
    'chatComplete': AnyscaleChatCompleteResponseTransform,
    'stream-chatComplete': AnyscaleChatCompleteStreamChunkTransform,
    'embed': AnyscaleEmbedResponseTransform
  }
};

export default AnyscaleConfig;
