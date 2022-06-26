import requests, aiohttp, asyncio
from bs4 import BeautifulSoup, Tag
from data import KeyWord, Company, News, db_session


KEY_WORDS = ("технологии", "импортозамещение", "инновации", "научные разработки", "патенты", "гранты", "исследования")
headers = {
        "accept":"*/*",
        "user-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:101.0) Gecko/20100101 Firefox/101.0"
    }

LIMIT = 100

async def run_parser_ural56(session: aiohttp.ClientSession):
    now = 0
    url = "https://www.ural56.ru/search/?tags=&how=r&q={}&PAGEN_2={}"
    for key_word in KEY_WORDS:
        if now > 100:
            break
        for page in [1, 2]:
            async with session.get(url=url.format(key_word, page)) as response:
                soup = BeautifulSoup(await response.text(), "lxml")
                all_info = list()
                news_blocks = soup.find_all("div", class_="search-item")
                for news_block in news_blocks:
                    all_info.append(get_info_block(news_block, key_word))
                write_all_info_into_db(all_info)


def get_info_block(news_block: Tag, key_word):
    news_title_block = news_block.find("a")
    news_title_text, news_title_url = news_title_block.text, f"https://www.ural56.ru{news_title_block['href']}"
    news_preview_text = news_block.find("div", class_="search-preview").text
    news_date = get_news_date(news_block.find_all("div")[-1].text.split("\n")[0].split(": ")[-1])
    key_words, companies = get_key_words_companies(news_title_url, key_word)
    return {
        "title":news_title_text, 
        "url":news_title_url,
        "text":news_preview_text,
        "date_publish":news_date,
        "key_words":key_words,
        "companies":companies
    }

def get_news_date(date: str):
    try:
        date_split = date.split(".")
        return f"{date_split[2]}-{date_split[1]}-{date_split[0]}"
    except Exception:
        return ""

def get_key_words_companies(news_url: str, key_word):
    try:
        session = db_session.create_session()
        key_words = session.query(KeyWord).all()
        companies = session.query(Company).all()
        
        key_word_id = session.query(KeyWord).filter(KeyWord.word == key_word).first()
        response = requests.get(news_url, headers=headers).text
        soup = BeautifulSoup(response, "lxml")
        news_text = soup.find("div", class_='content__news-detail').text.strip()
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
        except Exception:
            pass