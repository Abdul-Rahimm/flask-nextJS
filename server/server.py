# all flask code will be here
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__) #creates a flash instance
CORS(app)

@app.route("/", methods=['Get'])
def main_page():
    return jsonify({
        "message":"Main Page"
    })

@app.route("/api/home", methods=["GET"])
def return_home():
    return jsonify({
        'message':"hello world"
    })

#to run our app
if __name__ == "__main__":
    app.run(debug=True, port=8080) #dev mode ; remove when deploying to production
