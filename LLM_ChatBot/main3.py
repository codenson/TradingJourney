import torch
from transformers import pipeline
from langchain_huggingface import HuggingFacePipeline
from langchain.prompts import PromptTemplate
import json
from flask import Flask, request, jsonify
from flask_cors import CORS

# data = """Date,Ticker,Initial Capital,Profit/Loss,Profit %,Pre market Sentiment ,Trade Details ,Green/Red,Net ,Tax,WashSale,Market sentiment,News
# 5/27/2025,QQQ,800,200,25,Fear from losing my capital-Causious- Pre market was soaring to the up side.,Took a QQQ options trade and decided to play it conservatively. I took my money out at aroud 40 percent profit mark (sold 3 out of 5 contracts), then I kept 2 runners until 100 percent profit. The options went higher way beyond where I sold.,????????,1000,70,0,-1,0,-1,,,,,,,,,,,,,,
# 5/28/2025,QQQ,1000,-667,-66.7,Dull feeling. Couldn't tell the market's next move. But it looked like it could go up, but not to the point where I'd size up my position.,Took a QQQ options trade at .95 cents a pop. The market reversed quickly and I’ve been sitting in the red the entire day. The market was so choppy and options didn't see significant price action increases regardless of the ETF climbing slowly. So much chop.,????????,333,-233.45,1,0,1,-1,,,,,,,,,,,,,
# Only enter trades when 3/3 conditions are met (market direction, volume confirmation, clear chart setup).
# """

model_id = "TinyLlama/TinyLlama-1.1B-Chat-v1.0"

def llm(data):
    # Use GPU if available
    device = 0 if torch.cuda.is_available() else -1

    # Initialize Hugging Face pipeline with limits
    model_pipeline = pipeline(
        "text-generation",
        model=model_id,
        device=device,
        max_new_tokens=500,
        temperature=0.7,
        do_sample=True
    )

    llm = HuggingFacePipeline(pipeline=model_pipeline)

    # Prompt
    prompt = PromptTemplate.from_template(
        "You are a Wall Street trading expert. Analyze the following trading journal "
        "and provide ONLY advice, suggestions, and remarks in a single short paragraph (no JSON, no extra notes):\n\n"
        "Journal:\n{data}"
    )

    chain = prompt | llm

    # Run the chain
    raw_response = chain.invoke({"data": data})

    # Normalize the output text
    # if isinstance(raw_response, dict) and "text" in raw_response:
    #     text = raw_response["text"]
    # else:
    #     text = str(raw_response)

    # Clean out the repeated prompt and extra lines
    # lines = text.splitlines()
    # for i, line in enumerate(lines):
    #     if line.strip() and not line.strip().startswith(("You are", "Journal:", "Date,")):
    #         advice_start = i
    #         break
    # else:
    #     advice_start = 0

    # advice = "\n".join(lines[advice_start:]).strip()

    # Output as JSON only
    # result = {"advice": advice}clear
    
    # print(json.dumps(result, indent=2))
    print( raw_response)
    return raw_response

    
app = Flask(__name__)
CORS(app)
@app.route("/AnalyseCSV", methods=['POST'])
def generate_advice():
    json_data = request.get_json()
    print("Request recieved ------")
    if not json_data:
        return jsonify({"error": "Request body must be JSON"}), 415

    data = json_data.get("data")
    if not data:
        return jsonify({"error": "Missing 'data' in request"}), 400
    print("Received data for analysis:")
    
    return llm(data)

if __name__ == "__main__":
    app.run(debug=True)