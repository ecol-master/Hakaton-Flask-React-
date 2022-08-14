import React, {useState, useEffect} from 'react';
import Post from './components/news/posts/Post';
import Tags from './components/news/Tags';
import './News.css';

const News = () => {
    const [tags, setTags] = useState(['Инновации', 'Грант', 'Патент', 'Технологии', 'Импортозамещение', 'Научные разработки', 'Исследования']);

    const [clickTags, setClickTags] = useState({name: null})

    const [appState, setAppState] = useState({
        text: null,
    });
    console.log(clickTags)
    console.log((appState))
    useEffect(() => {
        console.log("отрендерился")
        const newsUrl = clickTags.name ? `api/v1/news/${clickTags.name.toLowerCase()}` : `api/v1/news/`;

        fetch(newsUrl)
            .then((res) => res.json())
            .then((text) => {
                setAppState({text: text});
            })
    }, [clickTags]);

    return (
        <div>
            <Tags tags={tags} clickTags={clickTags} setClickTags={setClickTags}/>
            {
                appState.text ? (
                    appState.text.news.map((news) => {
                        return (
                            <Post href={news.url} postTags={news.key_words} setClickTag={setClickTags} clickTag={clickTags.name} title={news.title}
                                  text={news.text} data={news.date} nameCompanies={news.companies}/>
                        );
                    })
                ) : (
                    <div style={{
                        color: 'aliceblue',
                        fontSize: '2.4rem',
                        marginTop: '50px',
                        textAlign: 'center',
                    }}>
                        По такому ключевому слову статьи не найдены
                    </div>
                )
            }
        </div>

    );
};

export default News;