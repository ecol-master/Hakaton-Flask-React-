from flask_restful import reqparse, abort, Resource
from flask import jsonify
from data import db_session
from data.authors import Author
from .authors_parser import parser


class NewsListResource(Resource):
    def post(self):
        args = parser.parse_args()
        author_name, author_biography = args["name"], args["biography"]
        author_url = args["url"]

        session = db_session.create_session()

        try:
            new_author = Author(
                name=author_name,
                biography=author_biography,
                url=author_url
            )
            session.add(new_author)
            session.commit() 
            return jsonify(
                    {
                        'success': new_author.id 
                    }
                )
        except Exception as error:
            return jsonify(
                    {
                        'failed': "not found"
                    }
                )