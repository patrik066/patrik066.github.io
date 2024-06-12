from flask import Flask, jsonify
import os

app = Flask(__name__)

@app.route('/api/get_images')
def get_images():
    image_dir = 'Slike/Galerija'  # Change this to the directory where your images are stored
    images = [f for f in os.listdir(image_dir) if f.endswith('.jpg')]  # Assuming your images have .jpg extension
    return jsonify(images)

if __name__ == '__main__':
    app.run(debug=True)
