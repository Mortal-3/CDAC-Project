from app import app
from flask import render_template
@app.route('/about',methods=['GET',"POST"])
def about():
    return render_template('about.html')