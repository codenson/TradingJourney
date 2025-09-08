from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/AnalyseCSV", methods=['POST'])
def generate_advice():
    return "Hello, World!"

if __name__ == "__main__":
    app.run(debug=True)