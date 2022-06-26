import schedule, time
from parser import parsers_main
from data import db_session

db_session.global_init("db/database.db")

schedule.every().day.at("20:15").do(parsers_main)
while True:
    schedule.run_pending()
    time.sleep(1)