from flask_restful import Api
from .news_resource import NewsListResource, NewsFilterListResource, NewToArchiveResource, ArchiveNewsListResource, MakeXlsDatas, UpdateData


def register_api(app):
    api = Api(app)

    # для получения новостей по ключевому слову
    api.add_resource(NewsFilterListResource, "/api/v1/news/<string:key_word>/")
    # для получения всех новостей
    api.add_resource(NewsListResource, '/api/v1/news/')
    # сделать запись с уникальным url архивированной
    api.add_resource(NewToArchiveResource, "/api/v1/news_archive/<string:url_news>"),
    # вывод архивированных записей
    api.add_resource(ArchiveNewsListResource, "/api/v1/news_archive/")
    # запрос для создания xls файлов из новостей
    api.add_resource(MakeXlsDatas, "/api/v1/make_xls/")
    # запрос для создания xls файлов из новостей
    api.add_resource(UpdateData, "/api/v1/update_data/")