from flask import Flask, request, render_template,redirect
from  flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
# Configuring DataBase
app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:///data.db' #file named data created
app.config['SQLALCHEMY_DATABASE_URI']=False
# intialize database
# db = SQLAlchemy(app)

@app.route('/',methods=['GET','POST'])
def simulator():
    return render_template( 'simulator.html' )





app.run(debug=True)