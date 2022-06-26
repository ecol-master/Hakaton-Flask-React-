from flask_restful import Api
from .news_resource import NewsListResource, NewsFilterListResource, NewToArchiveResource, ArchiveNewsListResource


def register_api(app):
    api = Api(app)

    # ресурсы для всех статей
    api.add_resource(NewsFilterListResource, "/api/v1/news/<string:key_word>/")
    # апи для автора
    api.add_resource(NewsListResource, '/api/v1/news')

    api.add_resource(NewToArchiveResource, "/api/v1/news_archive/<string:url_news>"),
    api.add_resource(ArchiveNewsListResource, "/api/v1/news_archive/")