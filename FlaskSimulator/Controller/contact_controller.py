from app import app
from model.contact_model import contact_model# import the model from model.py and contact_model is the class name and model is is folder
obj = contact_model() 
from flask import Flask, request, render_template
@app.route('/contact', methods=["GET", "POST"] )
def contact():
    return obj.contact_data_model()