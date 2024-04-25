from app import app
from flask_sqlalchemy import SQLAlchemy
from flask import render_template, request

# Initialize the Flask application
app = app

# Configure and initialize the SQLAlchemy database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Define the Contact model
class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    address2 = db.Column(db.String(200))
    city = db.Column(db.String(100), nullable=False)
    zip_code = db.Column(db.String(20), nullable=False)

    def __repr__(self):
        return f"Contact('{self.first_name}', '{self.last_name}', '{self.email}')"

# Create the database tables
db.create_all()

# Define a function to handle contact form data
def contact_data_model():
    if request.method == "POST":
        # Get form data
        first_name = request.form.get('first_name')
        last_name = request.form.get('last_name')
        email = request.form.get('email')
        address = request.form.get('address')
        address2 = request.form.get('address2')
        city = request.form.get('city')
        zip_code = request.form.get('zip_code')

        # Perform any validation or processing on the data here

        # Render the template with the data
        return render_template('contact.html', 
                               first_name=first_name, 
                               last_name=last_name, 
                               email=email, 
                               address=address, 
                               address2=address2, 
                               city=city, 
                               zip_code=zip_code)

    # If request method is GET or form is not submitted, render the empty form
    return render_template('contact.html')
