from app import app

from flask import Flask, request, render_template,redirect
@app.route('/contact', methods=["GET", "POST"] )
def contact():
    return render_template('contact.html')