export const useLLM = () => {
  const models = [
    '@hf/thebloke/deepseek-coder-6.7b-base-awq',
    '@hf/thebloke/deepseek-coder-6.7b-instruct-awq',
    '@cf/deepseek-ai/deepseek-math-7b-base',
    '@cf/deepseek-ai/deepseek-math-7b-instruct',
    '@cf/thebloke/discolm-german-7b-v1-awq',
    '@cf/tiiuae/falcon-7b-instruct',
    '@cf/google/gemma-2b-it-lora',
    '@cf/google/gemma-7b-it-lora',
    '@hf/google/gemma-7b-it',
    '@hf/nousresearch/hermes-2-pro-mistral-7b',
    '@hf/thebloke/llama-2-13b-chat-awq',
    '@cf/meta/llama-2-7b-chat-fp16',
    '@cf/meta-llama/llama-2-7b-chat-hf-lora',
    '@cf/meta/llama-3-8b-instruct',
    '@cf/meta/llama-3-8b-instruct-awq',
    '@cf/meta/llama-3.1-8b-instruct',
    '@cf/meta/llama-3.1-8b-instruct-awq',
    '@cf/meta/llama-3.1-8b-instruct-fp8',
    '@hf/thebloke/llamaguard-7b-awq',
    '@cf/mistral/mistral-7b-instruct-v0.1',
    '@hf/thebloke/mistral-7b-instruct-v0.1-awq',
    '@cf/mistral/mistral-7b-instruct-v0.2-lora',
    '@hf/mistral/mistral-7b-instruct-v0.2',
    '@hf/thebloke/neural-chat-7b-v3-1-awq',
    '@cf/openchat/openchat-3.5-0106',
    '@hf/thebloke/openhermes-2.5-mistral-7b-awq',
    '@cf/microsoft/phi-2',
    '@cf/qwen/qwen1.5-0.5b-chat',
    '@cf/qwen/qwen1.5-1.8b-chat',
    '@cf/qwen/qwen1.5-14b-chat-awq',
    '@cf/qwen/qwen1.5-7b-chat-awq',
    '@cf/defog/sqlcoder-7b-2',
    '@hf/nexusflow/starling-lm-7b-beta',
    '@cf/tinyllama/tinyllama-1.1b-chat-v1.0',
    '@cf/fblgit/una-cybertron-7b-v2-bf16',
    '@hf/thebloke/zephyr-7b-beta-awq'
  ]
  const model = useCookie<string>('llm-model', { default: () => '@cf/meta/llama-3.2-3b-instruct' })

  return {
    models,
    model
  }
}
