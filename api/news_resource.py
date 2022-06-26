from flask_restful import reqparse, abort, Resource
from flask import jsonify
from data import db_session
from data import News, KeyWord


def get_key_words_by_news(key_words_ids: str):
    session = db_session.create_session()
    key_words = session.query(KeyWord).all()
    key_words_ids_list = key_words_ids.split()
    key_words_names = list()
    for key_word_id in key_words_ids_list:
        key_word_name_list = list(filter(lambda x: x.id == int(key_word_id), key_words))
        key_words_names.append(key_word_name_list[0].word)
    return key_words_names


class NewsListResource(Resource):
    def get(self):
        session = db_session.create_session()
        all_news = session.query(News).filter(News.is_archive == False).all()

        try:
            info = {"news":[{
                "title": news.title,
                "url":news.url,
                "text":news.text,
                "date":news.date_publish,
                "key_words": get_key_words_by_news(news.key_words)
            } for news in all_news]}
            return jsonify(info)
        except Exception as error:
            print(error)
            return jsonify(
                {
                    "news":[]
                }
            )


class NewsFilterListResource(Resource):
    def get(self, key_word):
        session = db_session.create_session()
        all_news = session.query(News).filter(News.is_archive == False).all()
        all_news_filtered = list(filter(lambda x: key_word in get_key_words_by_news(x.key_words), all_news))
        try:
            return jsonify({
                "news":[
                {
                    "title": news.title,
                    "url":news.url,
                    "text":news.text,
                    "date":news.date_publish,
                    "key_words": get_key_words_by_news(news.key_words)
                } for news in all_news_filtered]
                })
        except Exception:
            return jsonify(
                {
                    "news":[]
                }
            )

class NewToArchiveResource(Resource):
    def get(self, url_news):
        print(url_news)
        url_f1 = url_news.replace("***", "/")
        url_f2 = url_f1.replace("-----", "&")
        url_f3 = url_f2.replace("----", "?")
        
        url = f"https://{url_f3}"
        session = db_session.create_session()
        try:
            print(url)
            news = session.query(News).filter(News.url == url).first()
            news.is_archive = True
            session.commit()
            print("тут2")
            return jsonify({"message":"succes"})
        except Exception:
            return jsonify({"message":"failed"})


class ArchiveNewsListResource(Resource):
    def get(self):
        session = db_session.create_session()
        all_news = session.query(News).filter(News.is_archive == False).all()

        try:
            info = {"news":[{
                "title": news.title,
                "url":news.url,
                "text":news.text,
                "date":news.date_publish,
                "key_words": get_key_words_by_news(news.key_words)
            } for news in all_news[:5]]}
            return jsonify(info)
        except Exception as error:
            print(error)
            return jsonify(
                {
                    "news":[]
                }
            )