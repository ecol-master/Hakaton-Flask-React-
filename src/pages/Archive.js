import React, {useEffect, useState} from 'react';
import PostArchive from './components/archive/PostArchive';

const Archive = () => {
    const [appState, setAppState] = useState({
        loading: false,
        text: null,
      });
    
      useEffect(() => {
        setAppState({ loading: true });
    
        const newsUrl = '';
    
        fetch(newsUrl)
          .then((res) => res.json())
          .then((text) => {
            setAppState({ loading: true, text: text });
          });
      }, [setAppState]);

    return (
      <>
      {
        appState.text ? (
        appState.text.news.map((news) => {
          return (
            <PostArchive href={news.url} postTags={news.key_words} title={news.title} text={news.text} data={news.date} nameCompanies={news.companies}/>
          );
        })
      ) : (
    <div style={{
        color: 'aliceblue',
        fontSize: '2.4rem',
        marginTop: '50px',
        textAlign: 'center',
    }}>
        Ни один пост не занесен в архив
    </div>)}
    </>
    );
};

export default Archive;