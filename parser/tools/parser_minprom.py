import requests
from aiohttp import ClientSession
from bs4 import BeautifulSoup, Tag
from data import KeyWord, News, db_session, Company


KEY_WORDS = ("технологии", "импортозамещение", "инновации", "научные разработки", "патенты", "гранты", "исследования")
headers = {
        "accept":"*/*",
        "user-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:101.0) Gecko/20100101 Firefox/101.0"
    }

LIMIT = 100


async def run_parser_minprom(session: ClientSession):
    url = "https://minpromenergo.orb.ru/search/?q={}&csrftoken=16fc20d0cbc9f36833455e800dffb6eb2973e62ecd99894cccb5dcb371dcec5d3503f2bb2ed124d8"
    now = 0
    for key_word in KEY_WORDS:
        if now > 100:
            break
        async with session.get(url.format(key_word), headers=headers) as response:
            soup = BeautifulSoup(await response.text(), "lxml")
            news_blocks = soup.find_all("div", class_="news__item")
            all_info = list()
            for news_block in news_blocks:
                all_info.append(get_news_info(news_block, key_word))
            write_all_info_into_db(all_info)

def get_news_info(news_block: Tag, key_word):
    new_title_block = news_block.find("h2", class_="news__title")
    news_title_text = new_title_block.text
    news_title_url = f"https://minpromenergo.orb.ru{new_title_block.find('a')['href']}"
    news_text_preview = news_block.find("div", class_="news__preview").text
    key_words, companies = get_key_words_companies(news_title_url, key_word)

    return {
        "title":news_title_text, 
        "url":news_title_url,
        "text": news_text_preview,
        "date_publish": "",
        "key_words":key_words,
        "companies":companies
    }

def get_key_words_companies(news_url: str, key_word):
    session = db_session.create_session()
    key_words = session.query(KeyWord).all()
    companies = session.query(Company).all()    
    key_word_id = session.query(KeyWord).filter(KeyWord.word == key_word).first()
    
    try:
        response = requests.get(news_url, headers=headers).text
        soup = BeautifulSoup(response, "lxml")
        news_text = soup.find("div", class_='news-detail__left-column').text.strip()
        key_words_news = list()
        companies_news = list()

        for key_word in key_words:
            if key_word.word in news_text:
                key_words_news.append(str(key_word.id))
        
        for company in companies:
            if company.company in news_text:
                companies_news.append(str(company.id))

            
        return (" ".join(key_words_news) if key_words_news != [] else str(key_word_id.id),
            " ".join(companies_news) if companies_news != [] else "")
    except Exception:
        return str(key_word_id.id), ""


def write_all_info_into_db(all_info: list[dict, ...]):
    session = db_session.create_session()
    for news in all_info:
        try:
            news_db = News(
                title=news["title"],
                url=news["url"],
                text=news["text"],
                date_publish=news["date_publish"],
                key_words=news["key_words"],
                companies=news["companies"]
            )
            session.add(news_db)
            session.commit()
            print("создал 4")
        except Exception:
            print("запись повторилась")