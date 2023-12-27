import AnthropicConfig from "./anthropic/index.js";
import AnyscaleConfig from "./anyscale/index.js";
import AzureOpenAIConfig from "./azure-openai/index.js";
import CohereConfig from "./cohere/index.js";
import GoogleConfig from "./google/index.js";
import OpenAIConfig from "./openai/index.js";
import PalmAIConfig from "./palm/index.js";
import TogetherAIConfig from "./together-ai/index.js";
import { ProviderConfigs } from "./types.js";

const Providers: { [key: string]: ProviderConfigs } = {
  openai: OpenAIConfig,
  cohere: CohereConfig,
  anthropic: AnthropicConfig,
  'azure-openai': AzureOpenAIConfig,
  anyscale: AnyscaleConfig,
  palm: PalmAIConfig,
  'together-ai': TogetherAIConfig,
  google: GoogleConfig
};

export default Providers;
