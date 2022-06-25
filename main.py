from parser import run_parser_sites, run_parser_adaptive
from apscheduler.schedulers.background import BackgroundScheduler
from data import db_session
from settings import add_info_into_db, PARSER_TIME
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

def parsers_main():
    asyncio.run(run_parser_sites())
    asyncio.run(run_parser_adaptive())


if __name__ == "__main__":
    app.run()
    sched = BackgroundScheduler(daemon=True)
    sched.add_job(parsers_main,'interval',minutes=PARSER_TIME)
    sched.start()
    atexit.register(lambda: sched.shutdown())
    # parsers_main()
   

