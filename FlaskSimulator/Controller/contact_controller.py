from app import app
from flask import render_template

@app.route('/contact', methods=["GET", "POST"] )
def contact():
    return render_template('contact.html')