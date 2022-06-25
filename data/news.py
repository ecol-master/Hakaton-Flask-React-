from .db_session import SqlAlchemyBase
import sqlalchemy

class News(SqlAlchemyBase):
    __tablename__ = 'news'

    id = sqlalchemy.Column(sqlalchemy.Integer,
                           primary_key=True, autoincrement=True)

    title = sqlalchemy.Column(sqlalchemy.String, default="")
    url = sqlalchemy.Column(sqlalchemy.String, unique=True, default="")
    text = sqlalchemy.Column(sqlalchemy.Text, default="")
    date_publish = sqlalchemy.Column(sqlalchemy.String, default="")
    key_words = sqlalchemy.Column(sqlalchemy.String, default="")
    companies = sqlalchemy.Column(sqlalchemy.String, default="")
