import React, {useState, useEffect} from 'react';
import Post from './components/news/posts/Post';
import Tags from './components/news/Tags';
import './News.css';

const News = () => {
    const [tags, setTags] = useState(['Инновации', 'Грант', 'Патент', 'Технологии', 'Импортозамещение', 'Научные разработки', 'Исследования']);

    const [clickTags, setClickTags] = useState({name: null})

    const [appState, setAppState] = useState({
        loading: false,
        text: null,
      });
    
      useEffect(() => {
        setAppState({ loading: true });
    
        const newsUrl = localStorage.getItem("key_word") ? `api/v1/news/${localStorage.getItem("key_word").toLowerCase()}` : `api/v1/news/`;
    
        fetch(newsUrl)
          .then((res) => res.json())
          .then((text) => {
            setAppState({ loading: true, text: text });
          });
      }, [setAppState]);
    
    return (     
        <div>
            <Tags tags={tags} clickTags={clickTags} setClickTags={setClickTags}/>
          {
          appState.text ? (
            appState.text.news.map((news) => {
              return (
                <Post href={news.url} postTags={news.key_words} title={news.title} text={news.text} data={news.date} nameCompanies={news.companies}/>
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