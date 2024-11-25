from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def main_page():
    return jsonify({
        "message": "Main Page"
    })

@app.route("/api/count-words", methods=["POST"])
def count_words():
    """
    Accepts a JSON payload with a sentence and returns the word count.
    """
    data = request.get_json()  # Get JSON data from request
    print(data)
    if not data or "sentence" not in data:
        return jsonify({"error": "Invalid request, 'sentence' is required"}), 400
    
    sentence = data["sentence"]
    word_count = len(sentence.split())  # Count words in the sentence
    return jsonify({"word_count": word_count})

if __name__ == "__main__":
    app.run(debug=True, port=8080)
