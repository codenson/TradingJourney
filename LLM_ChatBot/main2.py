import os
from huggingface_hub import hf_hub_download
import torch
from transformers import pipeline
from flask import Flask, request, jsonify

from flask_cors import CORS
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain_huggingface import HuggingFacePipeline  # Fixed: removed duplicate import
from transformers.utils.logging import set_verbosity_error

from dotenv import load_dotenv
load_dotenv() 

import torch
import re

print("CUDA available:", torch.cuda.is_available())

if torch.cuda.is_available():
    print("Device:", torch.cuda.get_device_name(0))
    device = 0  # Use GPU
else:
    print("Using CPU")
    device = -1  # Use CPU

modelId = "TinyLlama/TinyLlama-1.1B-Chat-v1.0"

app = Flask(__name__)
CORS(app)

# Initialize model once at startup for better performance
print("Loading model...")
try:
    # Use device mapping based on availability
    text_generation_pipeline = pipeline(
        "text-generation", 
        model=modelId, 
        device=device,
        #max_length=512,  # Add reasonable limits
        do_sample=True,
        temperature=0.7,
        top_p=0.9,
        pad_token_id=50256  # Set pad token to avoid warnings
    )
    hf_llm = HuggingFacePipeline(pipeline=text_generation_pipeline)
    print("Model loaded successfully!")
except Exception as e:
    print(f"Error loading model: {e}")
    text_generation_pipeline = None
    hf_llm = None

@app.route("/AnalyseCSV", methods=['POST'])
def analyze_csv():
    try:
        # Check if model is loaded
        if hf_llm is None:
            return jsonify({"error": "Model not loaded properly"}), 500
            
        json_data = request.get_json()
        if not json_data:
            return jsonify({"error": "Request body must be JSON"}), 415

        data = json_data.get("data")
        if not data:
            return jsonify({"error": "Missing 'data' in request"}), 400

        # Fixed template with proper formatting
        template = PromptTemplate.from_template(
            """You are a seasoned Wall Street trader and analyst with extensive knowledge and experience in day/swing trading. 
            Analyze the following trading journal and provide professional advice, suggestions, and remarks in a short paragraph format (not JSON).
            
            Trading Journal Data:
            {data}
            
            Analysis:"""
        )
        
        print("Request received with data:")
        print(data[:200] + "..." if len(str(data)) > 200 else data)  # Print first 200 chars
        
        # Use modern LangChain syntax (pipe operator)
        chain = template | hf_llm
        
        # Invoke the chain with proper input
        response = chain.invoke({"data": str(data)})
        
        # Extract the generated text from response
        if isinstance(response, str):
            result_text = response
        elif isinstance(response, dict) and 'text' in response:
            result_text = response['text']
        else:
            result_text = str(response)
        
        print("Response generated:")
        print(result_text)
        
        #return result_text
        return jsonify({"analysis": result_text})
        
        
    except Exception as e:
        print(f"Error in analysis: {str(e)}")
        return jsonify({"error": f"Analysis failed: {str(e)}"}), 500


# if __name__ == '__main__':
#     app.run(debug=True, host='0.0.0.0', port=5000)
if __name__ == "__main__":
    app.run(debug=True)