import os
from huggingface_hub import hf_hub_download
import torch
from transformers import pipeline
from flask import Flask, request, jsonify

from flask_cors import CORS
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain.llms import HuggingFacePipeline
from langchain_huggingface import HuggingFacePipeline
from transformers.utils.logging import set_verbosity_error


from dotenv import load_dotenv
load_dotenv() 

import torch
import re

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
# template = PromptTemplate.from_template("""
# You are a seasoned Wall Street trader and analyst.
# Analyze the following trading journal and provide professional advice, remarks, and suggestions.
# Respond in a short paragraph (not JSON).

# Trading Journal:
# {data}
# """)
app = Flask(__name__)
CORS(app)
@app.route("/AnalyseCSV", methods=['POST'])
def llm():
    json_data = request.get_json()
    if not json_data:
        return jsonify({"error": "Request body must be JSON"}), 415

    data = json_data.get("data")
    if not data:
        return jsonify({"error": "Missing 'data' in request"}), 400

    # Your LLM logic here
    model  = pipeline("text-generation", model="TinyLlama/TinyLlama-1.1B-Chat-v1.0" , device= 0)
    llm = HuggingFacePipeline(pipeline=model)
    #template = PromptTemplate.from_template("Youn are a wallstreet mongole and trader who has so much knowlwdge and experience in day/Swing trading. Analyze the trader's trading journal {data}and give advice and suggestions and remarks. Give advice in paragraph formart not json")
    template = PromptTemplate.from_template(
        "Youn are a wallstreet mongole and trader who has so much knowlwdge and experience in day/Swing trading. Analyze the trader's trading journal and give advice and suggestions and remarks. Give advice in paragraph formart not json"
        "Give advice, suggestions, and remarks in a short paragraph format (not JSON)."
        "data is as folow {data}"
    )
    # template = PromptTemplate.from_template(""" You are a seasoned Wall Street trader and analyst. Analyze the following trading journal and provide professional advice, remarks, and suggestions.Respond in a short paragraph (not JSON).
    #   Trading Journal:
    #      {data}
    #    """)
    print("Request recieved with data:")
    chain = template | llm
    
    response = chain.invoke({"data": data})
    print(response)
    return response
 

# def parsed_response():
#     model  = pipeline(task="text-generation", model=modelId , device= 0)
#     llm = HuggingFacePipeline(pipeline=model)
#     template = PromptTemplate.from_template("")
    

for filename in filesnames:
    downloaded_model_path = hf_hub_download(repo_id=modelId, filename=filename, token=os.getenv("HUGGINGFACE_TOKEN"))
    print(downloaded_model_path)
    
pipe = pipeline("text-generation", model="TinyLlama/TinyLlama-1.1B-Chat-v1.0", torch_dtype=torch.bfloat16, device_map="auto")

# We use the tokenizer's chat template to format each message - see https://huggingface.co/docs/transformers/main/en/chat_templating
messages = [
    {
        "role": "system",
        "content": "Youn are a wallstreet trader who has so much knowlwdge and experience and gives advice to people who ask you questions.",
        "rules ": "Rewrite the following response into a clean, natural, and professional paragraph. Remove any debug logs, system/user/assistant tags, and extra spacing. Keep only the assistant's intended advice, no JSON or raw logs"
    },
    {"role": "user", "content": "What is the best trading strategy for someonw who has good entry points,but bad exit points?"},
]
# prompt = pipe.tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
# outputs = pipe(prompt, max_new_tokens=256, do_sample=True, temperature=0.7, top_k=50, top_p=0.95)
# print(outputs[0]["generated_text"])


# app = Flask(__name__)
# CORS(app)
# @app.route("/LLM", methods=['GET'])
# def llm():
#     print("Received message:*****")
  
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

# @app.route("/AnalyseCSV", methods=['GET'])
# def llm():
#     json_data = request.get_json()
#     data = json_data.get("data")
 
#     if not data or not isinstance(data, str):
#         return jsonify({"error": "Missing or invalid 'data' parameter"}), 400
    
#     print("Received message:*****")
   
#     messages = [
#     {
#         "role": "system",
#         "content": "Youn are a wallstreet trader who has so much knowlwdge and experience and gives advice to people who ask you questions.",

#     }, 
#     {"role": "user", "content": data},
#     ]
#     prompt = pipe.tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
#     outputs = pipe(prompt, max_new_tokens=256, do_sample=True, temperature=0.7, top_k=50, top_p=0.95)
#     print(outputs[0]["generated_text"])
#     return  outputs[0]["generated_text"]

# @app.route("/AnalyseCSV", methods=['POST'])
# def llm():
#     json_data = request.get_json()
#     if not json_data:
#         return jsonify({"error": "Request body must be JSON"}), 415

#     data = json_data.get("data")
#     if not data:
#         return jsonify({"error": "Missing 'data' in request"}), 400

#     # LLM logic 
#     messages = [
#         {"role": "system", 
#          "content": "Youn are a wallstreet mongole and trader who has so much knowlwdge and experience in day/Swing trading. Analyze the trader's trading journal and give advice and suggestions and remarks. Give advice in paragraph formart not json",
#          },
#         {"role": "user", "content": data},
#     ]

#     try:
#         prompt = pipe.tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
#         outputs = pipe(prompt, max_new_tokens=256, do_sample=True, temperature=0.7, top_k=50, top_p=0.95)
        
#         raw_response = outputs[0]["generated_text"]
#         cleaned_response = clean_llm_output(raw_response)
        
        
#         print(cleaned_response)
#         return cleaned_response
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500
    
# def clean_llm_output(raw_text: str) -> str:
#     cleaned = re.sub(r"<\|.*?\|>", "", raw_text)  # Remove <|system|>, <|user|>, etc.
#     cleaned = re.sub(r"\* Debugger.*", "", cleaned)  # Remove debugger messages
#     cleaned = re.sub(r"127\.0\.0\.1.*", "", cleaned)  # Remove Flask server logs
#     cleaned = re.sub(r"\s+", " ", cleaned)  # Collapse multiple spaces/newlines
#     return cleaned.strip()
    
    
    
@app.route("/")
def home():
#     messages = [
#     {
#         "role": "system",
#         "content": "Youn are a wallstreet trader who has so much knowlwdge and experience and gives advice to people who ask you questions.",
#     },
#     {"role": "user", "content": "What is the best trading strategy for someonw who has good entry points,but bad exit points?"},
# ]
#     prompt = pipe.tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
#     outputs = pipe(prompt, max_new_tokens=256, do_sample=True, temperature=0.7, top_k=50, top_p=0.95)
#     print(outputs[0]["generated_text"])
    
#     return outputs[0]["generated_text"]
    return "Welcome to the LLM Chatbot API! Use the /AnalyseCSV endpoint to get trading advice based on your data."
def testLLMLocally(): 
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

#testLLMLocally()
    


if __name__ == "__main__":
    app.run(debug=True)