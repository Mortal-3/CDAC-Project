from app import app
from flask import Flask, request, render_template

@app.route('/about',methods=['GET',"POST"])
def about():
    return render_template('about.html')