import { ProviderConfigs } from "../types.js";
import CohereAPIConfig from "./api.js";
import { CohereChatCompleteConfig, CohereChatCompleteResponseTransform, CohereChatCompleteStreamChunkTransform } from "./chatComplete.js";
import {CohereCompleteConfig, CohereCompleteResponseTransform, CohereCompleteStreamChunkTransform} from "./complete.js";
import { CohereEmbedConfig, CohereEmbedResponseTransform } from "./embed.js";

const CohereConfig: ProviderConfigs = {
  complete: CohereCompleteConfig,
  chatComplete: CohereChatCompleteConfig,
  embed: CohereEmbedConfig,
  api: CohereAPIConfig,
  responseTransforms: {
    complete: CohereCompleteResponseTransform,
    'stream-complete': CohereCompleteStreamChunkTransform,
    chatComplete: CohereChatCompleteResponseTransform,
    'stream-chatComplete': CohereChatCompleteStreamChunkTransform,
    embed: CohereEmbedResponseTransform
  }
};

export default CohereConfig;
