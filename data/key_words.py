from .db_session import SqlAlchemyBase
import sqlalchemy


class KeyWord(SqlAlchemyBase):
    __tablename__ = 'key_words'

    id = sqlalchemy.Column(sqlalchemy.Integer,
                           primary_key=True, autoincrement=True)
    word = sqlalchemy.Column(sqlalchemy.String, default="")
