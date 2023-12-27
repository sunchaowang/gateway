import { ProviderConfigs } from "../types.js";
import TogetherAIApiConfig from "./api.js";
import {TogetherAIChatCompleteConfig, TogetherAIChatCompleteResponseTransform, TogetherAIChatCompleteStreamChunkTransform } from "./chatComplete.js";
import { TogetherAICompleteConfig, TogetherAICompleteResponseTransform, TogetherAICompleteStreamChunkTransform } from "./complete.js";

const TogetherAIConfig: ProviderConfigs = {
  complete: TogetherAICompleteConfig,
  chatComplete: TogetherAIChatCompleteConfig,
  api: TogetherAIApiConfig,
  responseTransforms: {
    'stream-complete': TogetherAICompleteStreamChunkTransform,
    'complete': TogetherAICompleteResponseTransform,
    'chatComplete': TogetherAIChatCompleteResponseTransform,
    'stream-chatComplete': TogetherAIChatCompleteStreamChunkTransform
  }
};

export default TogetherAIConfig;
