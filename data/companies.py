from .db_session import SqlAlchemyBase
import sqlalchemy


class Company(SqlAlchemyBase):
    __tablename__ = "companies"

    id = sqlalchemy.Column(sqlalchemy.Integer,
                           primary_key=True, autoincrement=True)

    company = sqlalchemy.Column(sqlalchemy.String, default="")
    