from data import db_session
from settings import add_info_into_db
from flask import Flask, render_template
import asyncio, atexit
from api.__register_api import register_api

app = Flask(__name__)

db_session.global_init("db/database.db")
add_info_into_db()

register_api(app=app)

@app.route("/")
@app.route("/news")
@app.route("/archive")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run()