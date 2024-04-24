from flask import Flask, request, render_template,redirect
from  flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
# Configuring DataBase
app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:///data.db' #file named data created
app.config['SQLALCHEMY_DATABASE_URI']=False
# intialize database
# db = SQLAlchemy(app)

# @app.route('/',methods=['GET','POST'])
# def simulator():
#     return render_template( 'simulator.html' )

# @app.route('/about',methods=['GET',"POST"])
# def about():
#     return render_template('about.html')

# @app.route('/contact', methods=["GET", "POST"] )
# def contact():
#     return render_template('contact.html')

# import Controller.about_controller as about_controller
# import Controller.contact_controller as contact_controller
# import Controller.simulator_controller as simulator_controller
# .............................OR...............................
# from Controller import simulator_controller,about_controller,contact_controller
# .............................OR...............................
from controller import *


app.run(debug=True)