from flask import Flask, render_template,request,redirect
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Configure the database URI
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///todo.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize SQLAlchemy
db = SQLAlchemy(app)
print("Connected to DB Successfully")

# Define the Todo model
class Todo(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    desc = db.Column(db.String(500), nullable=False)
    # date_created = db.Column(db.DateTime, default=datetime.now)
    date_created = db.Column(db.String(10), default=datetime.now().strftime('%I:%M %p'))

    def __repr__(self):
        return f"{self.sno} - {self.title}"

# Create the database tables
with app.app_context():
    db.create_all()
    print("Table Created Successfully")

# Define routes

@app.route('/',methods=['GET','POST'])
def hello_world():
    title = None
    desc = None
    
    if request.method == "POST":
        print("Post Done.")
        title = request.form['title']
        desc = request.form['desc']
    
        # Add a todo item
        todo = Todo(title=title, desc=desc)
        db.session.add(todo)
        db.session.commit()
    
    # Retrieve all todo items
    allTodo = Todo.query.all()
    return render_template('index.html', allTodo=allTodo)

@app.route("/update/<int:sno>",methods=['GET','POST'])
def update(sno):
  if request.method=='POST':
        print("Update Done.")
        title = request.form['title']
        desc = request.form['desc']
    
        # Add a todo item
        todo = Todo.query.filter_by(sno=sno).first() 
        todo.title = title
        todo.desc=desc
        db.session.add(todo)
        db.session.commit()
        return redirect('/')
  todo = Todo.query.filter_by(sno=sno).first() 
  return render_template('update.html', todo=todo)

@app.route('/delete/<int:sno>')
def delete(sno):      
    todo = Todo.query.filter_by(sno=sno).first() 
    (print(todo,"Deleted Successfully"))
    db.session.delete(todo)
    db.session.commit()
    return redirect("/")

@app.route("/show")
def show():
    allTodo = Todo.query.all()
    print(allTodo)

@app.route("/product")
def product():
    return "This page will be updated soon ... !"

if __name__ == '__main__':
    app.run(debug=True)
