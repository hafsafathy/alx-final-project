from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

@app.route('/')
def index():
    return jsonify(message="Welcome to the Pharmacy API")

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Hello from Flask"})

@app.route('/rgister', methods=['POST'])
def register():
    data = request.get_json()
    # Validate data (check for required fields, etc.)
    required_fields = ['FirstName', 'LastName', 'BirthDate', 'Email', 'Password']
    for field in required_fields:
        if field not in data:
            return jsonify({"message": f"Missing {field}"}), 400
    
    # Handle registration logic (e.g., save to database, etc.)
    # Assuming successful registration
    return jsonify({"message": "Registration successful"}), 200

if __name__ == '__main__':
    app.run(port=5000)
