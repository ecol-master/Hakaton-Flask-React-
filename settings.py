from data import KeyWord, Company, db_session


PARSER_TIME = 1

KEY_WORDS = ("технологии", "импортозамещение", "инновации", "научные разработки", "патенты", "гранты", "исследования")

COMPANIES = (
    "ЭНЕРГИЯ", "Механический завод", "Инженерные технологии", "Глобал мониторинг",
    "Оренбургская экспедиция", "Альфасофт Альянс", "Альфасофт Альянс","БИОТЕХНИКА",
    "«Экобиос", "ПОЛИМЕРСТРОЙ", "Мастмастер", "СтальКом", "Пневмакс"
)

def add_info_into_db():
    session = db_session.create_session()
    add_key_words_into_db(session)
    add_companies_into_db(session)

def add_key_words_into_db(session):

    for key_word in KEY_WORDS:
        
        try:
            key_word_db = KeyWord(
                word=key_word
            )
            session.add(key_word_db)
            session.commit()
        except Exception:
            pass


def add_companies_into_db(session):
    for company in COMPANIES:
        try:
            company_db = Company(
                company=company
            )
            session.add(company_db)
            session.commit()
        except Exception:
            pass