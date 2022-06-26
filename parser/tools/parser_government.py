import requests, datetime
from aiohttp import ClientSession
from bs4 import BeautifulSoup, Tag
from data import KeyWord, Company, News, db_session


# INFO

KEY_WORDS = ("технологии", "импортозамещение", "инновации", "научные разработки", "патенты", "гранты", "исследования")
headers = {
        "accept":"*/*",
        "user-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:101.0) Gecko/20100101 Firefox/101.0"
    }

LIMIT = 100


async def run_parser_government(session: ClientSession):
    now = 0
    url = "https://orenburg-gov.ru/search/?q={}&csrftoken=16fb9af0c401674462cc4064f2fbb5db83e6d0cc02e717801f6a211a4b5a4978bce1bd996a62ff82&nav-search=page-{}"
    for key_word in KEY_WORDS:
        pages_count = get_pages_count(url.format(key_word, 1))
        for page in range(1, pages_count + 1):
            if now > LIMIT:
                break
            async with session.get(url=url.format(key_word, page), headers=headers) as response:
                soup = BeautifulSoup(await response.text(), "lxml")
                news_block = soup.find_all("div", class_="list__item")
                all_info = list()
                try:
                    for news in news_block:
                        item_info = await get_item_info(news, key_word)
                        all_info.append(item_info)
                    now += len(all_info)
                    write_info_to_db_news(all_info)
                except Exception as error:
                    print(error)

def get_pages_count(url: str):
    try:
        response = requests.get(url=url, headers=headers).text
        soup = BeautifulSoup(response, "lxml")
        pages_count = soup.find_all("a", class_="pagenav__page")[-2].text
        return int(pages_count)
    except Exception:
        return 1


async def get_item_info(item: Tag, key_word) -> dict:
    title_news = item.find("a", class_="list__item-link")
    title_news_text = title_news.text
    url_news = f"https://orenburg-gov.ru{title_news['href']}"

    preview_text, text = get_item_text(item, url_news)
    
    date_publish_news = get_news_publish_date(item)
    key_words_in_text = get_key_words_in_text(text, key_word)
    companies_in_text = get_companies_in_text(text)

    return {
        "title":title_news_text,
        "url":url_news,
        "text":preview_text,
        "date_publish":date_publish_news,
        "key_words":key_words_in_text,
        "companies":companies_in_text,
    }


def get_item_text(item, url_item: str) -> str:
    try:
        preview_text = item.find("div", class_="list__item-preview").text

        response = requests.get(url=url_item, headers=headers).text
        soup = BeautifulSoup(response, "lxml")
        text = soup.find("div", class_="news-detail__detail").text
        return (preview_text, text)
    except Exception:
        return "", ""


def get_news_publish_date(item: Tag) -> str:
    try:
        date_text_items = item.find("div", class_="list__item-footer").find_all("div")[-1].text.strip().split(":", 1)[-1].strip().split()
        months = ["янв", "фев", "мар", "апр", "май", "июн", \
                "июл", "авг", "сен", "окт", "ноя", "дек"]
        date_obj = datetime.datetime(year=int(date_text_items[2]), 
            month=months.index(date_text_items[1][:-1]) + 1, day=int(date_text_items[0]), 
            hour=int(date_text_items[3].split(":")[0]), minute=int(date_text_items[3].split(":")[1]))
        return date_obj.strftime("%Y-%m-%d")
    except Exception:
        return ""

def get_key_words_in_text(news_text: str, key_word: str):
    session = db_session.create_session()
    key_word = session.query(KeyWord).filter(KeyWord.word == key_word).first()    
    try:
        key_words = session.query(KeyWord).all()
        words_in_text = list()
        for key_word in key_words:
            if key_word.word in news_text:
                words_in_text.append(str(key_word.id))
        
        return ' '.join(words_in_text) if words_in_text != [] else str(key_word.id)
    except Exception:
        return str(key_word.id)


def get_companies_in_text(news_text: str):
    try:
        session = db_session.create_session()
        companies = session.query(Company).all()
        companies_in_text = list()
        for company in companies:
            if company.company in news_text:
                companies_in_text.append(str(company.id))
            
        return ' '.join(companies_in_text) if companies_in_text != [] else ""
    except Exception:
        return ""

def write_info_to_db_news(info: list[dict, ...]):
    session = db_session.create_session()
    
    for news_block in info:
        try:
            news = News(
                title=news_block["title"],
                url=news_block["url"],
                text=news_block["text"],
                date_publish=news_block["date_publish"],
                key_words=news_block["key_words"],
                companies=news_block["companies"]
            )
            session.add(news)
            session.commit()
        except Exception:
            pass