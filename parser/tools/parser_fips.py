import requests
from aiohttp import ClientSession
from bs4 import BeautifulSoup, Tag
from data import KeyWord, News, db_session


KEY_WORDS = ("технологии", "импортозамещение", "инновации", "научные разработки", "патенты", "гранты", "исследования")
headers = {
        "accept":"*/*",
        "user-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:101.0) Gecko/20100101 Firefox/101.0"
    }

LIMIT = 100


async def run_parser_fips(session: ClientSession):
    now = 0
    url = "https://fips.ru/search/?q={}&how=r&PAGEN_1={}"
    for key_word in KEY_WORDS:
        if now > 100:
            break
        async with session.get(url.format(key_word, 1), headers=headers) as response:
            soup = BeautifulSoup(await response.text(), "lxml")
            search_block = soup.find("div", class_="search-page")
            titles_page, urls_page = get_titles_urls_page(search_block)
            dates_page = get_dates_page(search_block)
            preview_texts = get_preview_texts(search_block)
            info = build_all_info(titles_page, urls_page, dates_page, preview_texts, key_word)
            write_info_to_db_news(info)

def get_titles_urls_page(search_block: Tag):
    titles_blocks = search_block.find_all("a")
    titles_texts = [item.text for item in titles_blocks[0:len(titles_blocks):5]]
    titles_urls = [f"https://fips.ru{item['href']}"for item in titles_blocks[0:len(titles_blocks):5]]
    return titles_texts, titles_urls

def get_dates_page(search_block: Tag):
    blocks = search_block.find_all("small")
    dates_blocks = blocks[0:len(blocks):2]
    dates = [get_date(date.text.strip().split(": ")[-1]) for date in dates_blocks]
    return dates

def get_date(date: str):
    date_split = date.split(".")
    return f"{date_split[2]}-{date_split[1]}-{date_split[0]}"   

def get_preview_texts(search_block: Tag):
    texts = search_block.find_all("p")[:-1]
    return [item.text for item in texts]

def get_key_words_and_companies(key_word):
    session = db_session.create_session()
    id_key_word = session.query(KeyWord).filter(KeyWord.word == key_word).first().id
    key_words = session.query(KeyWord).all()
    result = []
    for i in key_words:
        if i.word == key_word:
            result.append(str(i.id))

    return (' '.join(result) if result != [] else str(id_key_word), "")



def build_all_info(titles_page, urls_page, dates_page, texts_page, key_word):
    all_info = list()
    for index, item in enumerate(titles_page):
        url = urls_page[index]
        k_w, c = get_key_words_and_companies(key_word)
        all_info.append(
            {
                "title":titles_page[index],
                "url":url,
                "date_publish":dates_page[index],
                "text":texts_page[index],
                "key_words": k_w,
                "companies": c
            }
        )
    return all_info

def write_info_to_db_news(all_info: list[dict, ...]):
    session = db_session.create_session()
    for item in all_info:
        try:
            news = News(
                title=item["title"],
                url=item["url"],
                text=item["text"],
                date_publish=item["date_publish"],
                key_words=item["key_words"],
                companies=item["companies"]
            )
            session.add(news)
            session.commit()
        except Exception:
            pass