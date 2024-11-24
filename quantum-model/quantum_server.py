from flask import Flask, request, jsonify
from model import MSFF_QDConv
import torch

app = Flask(__name__)

# Load your quantum model
model = MSFF_QDConv()

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    word_inputs = torch.tensor(data.get('word_inputs'))  # Example input
    sentence_inputs = torch.tensor(data.get('sentence_inputs'))
    
    # Make predictions
    predictions = model(word_inputs, sentence_inputs)
    return jsonify({'predictions': predictions.tolist()})

if __name__ == '__main__':
    app.run(port=5001)  # Run on a separate port
