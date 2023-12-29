from flask import Flask, render_template, request,redirect
import json
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///db.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db= SQLAlchemy(app)
app.app_context().push()

class data(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    username=db.Column(db.String(50),nullable=False)
    password=db.Column(db.String(50),nullable=False)

    def __repr__(self):
        return '<Name %r>'%self.id

@app.route('/')
def home_pg():
    return render_template('db_home.html')
@app.route('/login',methods=['GET','POST'])
def login():
    if request.method == "POST":
        Username=request.form['username']
        new_user = data(username=Username)
        try:
            db.session.add(new_user)
            db.session.commit()
            return redirect('/login')
        except:
            return "Error"
    else:
        return render_template('db_login.html')

if __name__ == '__main__':
    app.run(debug=True)   

    