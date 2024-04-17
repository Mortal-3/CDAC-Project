from app import app
from flask import render_template
@app.route('/',methods=['GET','POST'])
def simulator():
    return render_template( 'simulator.html' )