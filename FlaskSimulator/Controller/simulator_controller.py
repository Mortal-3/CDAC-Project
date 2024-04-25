from app import app

from flask import Flask, request, render_template
@app.route('/',methods=['GET','POST'])
def simulator():
    return render_template( 'simulator.html' )