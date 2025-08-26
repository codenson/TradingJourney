import os
from huggingface_hub import hf_hub_download
import torch
from transformers import pipeline
from dotenv import load_dotenv
load_dotenv() 


print(torch.cuda.is_available())
print(torch.version.cuda)
print(torch.cuda.device_count())
print(torch.cuda.get_device_name(0) if torch.cuda.is_available() else "No CUDA device")



# print("Running on GPU:", torch.cuda.is_available())
# print("Device:", torch.cuda.get_device_name(0) if torch.cuda.is_available() else "CPU")

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

pipe = pipeline(
    "text-generation",
    model="TinyLlama/TinyLlama-1.1B-Chat-v1.0",
    torch_dtype=torch.float16,   # float16 works well with 1050 Ti
    device=0                     # Force use of GPU
)


def testScanner():
    user_input = ""

    while user_input != "q":
        user_input = input("Enter Prompt (or 'q' to quit): ")

        if user_input == "q":
            break

        messages = [
            {
                "role": "system",
                # "content": "You are a Wall Street trader with deep knowledge and experience. You give advice to people who ask questions."
                "content": "You are an experienced female domninatrix who helps new Beta men to become sessies and submimissive slaves, and you give advice to people who ask you questions. give out  a 7 day morning cuck sucking routine to makw the beta a good cocksucking craving bitch. Use nasty language and don't hold back.",

            },
            {
                "role": "user",
                "content": user_input
            }
        ]
        print("\n" + user_input + "\n")

        prompt = pipe.tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
        outputs = pipe(prompt, max_new_tokens=256, do_sample=True, temperature=0.7, top_k=50, top_p=0.95)
        print("\n" + outputs[0]["generated_text"] + "\n")

testScanner()
