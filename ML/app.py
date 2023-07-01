import os
import flask
from flask import render_template, Flask, request, jsonify, redirect
import pickle
import numpy as np
import warnings
import cv2
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.models import load_model
from flask_cors import CORS



warnings.filterwarnings("ignore", category=DeprecationWarning)
warnings.filterwarnings(action='ignore', category=FutureWarning)
warnings.filterwarnings(action='ignore', category=UserWarning)

app = Flask(__name__)
cors = CORS(app)

cors = CORS(app, resources={r"/*": {"origins": "*"}})


APP_ROOT = os.path.dirname(os.path.abspath(__file__))


model = pickle.load(open("crop_recommendation_svm.pkl", "rb"))
scaler = pickle.load(open("crop_recommendation_scaler.pkl", "rb"))

disease_model = load_model('plant_disease_detection.h5')

model1 = pickle.load(open("soil_fertility.pkl", "rb"))
fertility_list = ['Fertile','Non Fertile']



plant_list = ['apple', 'banana', 'blackgram', 'chickpea', 'coconut', 'coffee',
       'cotton', 'grapes', 'jute', 'kidneybeans', 'lentil', 'maize', 'mango',
       'mothbeans', 'mungbean', 'muskmelon', 'orange', 'papaya', 'pigeonpeas',
       'pomegranate', 'rice', 'watermelon']

def allowed_files(filename):
    allowed_extensions = ['jpg', 'jpeg', 'png']
    #abc.jpg --> ['abc', 'jpg']
    ext = filename.split('.')[-1]
    if ext.lower() in allowed_extensions:
        return True
    else:
        return False

@app.route('/fertility', methods=['POST'])
def fertility_crop():
    data = request.get_json()
    print(data)
    X = np.array(list(data.values())).reshape(1, -1)
    print(X.shape)
    # X_scaled = scaler.transform(X)
    predictions = model1.predict(X).tolist() 
    plant_pred = fertility_list[predictions[0]]
    return jsonify(plant_pred)


@app.route('/recommend', methods=['POST'])
def recommend_crop():
    data = request.get_json()
    print(data)
    X = np.array(list(data.values())).reshape(1, -1)
    print(X.shape)
    X_scaled = scaler.transform(X)
    predictions = model.predict(X_scaled).tolist() 
    plant_pred = plant_list[predictions[0]]
    return jsonify(plant_pred)


if __name__ == '__main__':
    app.run(port = 5000,debug=True)