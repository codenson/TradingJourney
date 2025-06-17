import os
from huggingface_hub import hf_hub_download
import torch
from transformers import pipeline
from flask import Flask
from flask_cors import CORS

from dotenv import load_dotenv
load_dotenv() 

import torch

print("CUDA available:", torch.cuda.is_available())

if torch.cuda.is_available():
    print("Device:", torch.cuda.get_device_name(0))
else:
    print("Using CPU")


modelId = "TinyLlama/TinyLlama-1.1B-Chat-v1.0"
filesnames= [
    ".gitattributes", 
    "README.md",
    "config.json",
    "eval_results.json",
    "generation_config.json",
    "model.safetensors",
    "special_tokens_map.json",
    "tokenizer.json",
    "tokenizer.model",
    "tokenizer_config.json",
]

for filename in filesnames:
    downloaded_model_path = hf_hub_download(repo_id=modelId, filename=filename, token=os.getenv("HUGGINGFACE_TOKEN"))
    print(downloaded_model_path)
    
pipe = pipeline("text-generation", model="TinyLlama/TinyLlama-1.1B-Chat-v1.0", torch_dtype=torch.bfloat16, device_map="auto")

# We use the tokenizer's chat template to format each message - see https://huggingface.co/docs/transformers/main/en/chat_templating
messages = [
    {
        "role": "system",
        "content": "Youn are a wallstreet trader who has so much knowlwdge and experience and gives advice to people who ask you questions.",
    },
    {"role": "user", "content": "What is the best trading strategy for someonw who has good entry points,but bad exit points?"},
]
# prompt = pipe.tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
# outputs = pipe(prompt, max_new_tokens=256, do_sample=True, temperature=0.7, top_k=50, top_p=0.95)
# print(outputs[0]["generated_text"])


app = Flask(__name__)
CORS(app)
@app.route("/LLM", methods=['GET'])
def llm():
    # print("Received message:*****", message)
    messages = [
    {
        "role": "system",
        "content": "Youn are a wallstreet trader who has so much knowlwdge and experience and gives advice to people who ask you questions.",

    }, 
    {"role": "user", "content": "What is the best trading strategy for someonw who has good entry points,but bad exit points?"},
    ]
    prompt = pipe.tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
    outputs = pipe(prompt, max_new_tokens=256, do_sample=True, temperature=0.7, top_k=50, top_p=0.95)
    print(outputs[0]["generated_text"])
    return  outputs[0]["generated_text"]


@app.route("/")
def home():
    messages = [
    {
        "role": "system",
        "content": "Youn are a wallstreet trader who has so much knowlwdge and experience and gives advice to people who ask you questions.",
    },
    {"role": "user", "content": "What is the best trading strategy for someonw who has good entry points,but bad exit points?"},
]
    prompt = pipe.tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
    outputs = pipe(prompt, max_new_tokens=256, do_sample=True, temperature=0.7, top_k=50, top_p=0.95)
    print(outputs[0]["generated_text"])
    
    return outputs[0]["generated_text"]
# def testLLMLocally(): 
#     messages = [
#     {
#         "role": "system",
#         "content": "Youn are a wallstreet trader who has so much knowlwdge and experience and gives advice to people who ask you questions.",

#     }, 
#     {"role": "user", "content": "What is the best trading strategy for someonw who has good entry points,but bad exit points?"},
#     ]
#     prompt = pipe.tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
#     outputs = pipe(prompt, max_new_tokens=256, do_sample=True, temperature=0.7, top_k=50, top_p=0.95)
#     print(outputs[0]["generated_text"])
#     return  outputs[0]["generated_text"]

# testLLMLocally()
    


if __name__ == "__main__":
    app.run(debug=True)