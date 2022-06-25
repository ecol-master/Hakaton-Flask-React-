import React, {useState} from 'react';
import Post from './components/news/posts/Post';
import Tags from './components/news/Tags';
import './News.css';

const News = () => {
    const [tags, setTags] = useState(['Инновации', 'Грант', 'Патент', 'Технологии', 'Импортозамещение', 'Научные разработки', 'Исследования']);

    const [clickTags, setClickTags] = useState({name: null})

    return (
        <div>
            <Tags tags={tags} clickTags={clickTags} setClickTags={setClickTags}/>
            <Post href={'#0'} postTags={['инновации', 'технологии']} title={'Всемирный салон инноваций, научных исследований и новых технологий «Брюссель - Иннова/Эврика» (Brussels Innova)'} text={'С 17 по 19 ноября 2016 года в г. Брюсселе (Бельгия) в павильоне 10 Выставочного центра (Brussels Exhibition Centre) будет проходить 65-й Всемирный Салон инноваций, научных исследований и новых технологий «Брюссель - Иннова/Эврика 2016» 2015 г. 19 - 21 ноября 2015 г. в г. Брюсселе пройдет 64-й Всемирный'} data={'21.05.2018'} nameCompany={'JJY '}/>
            <Post href={'#0'} postTags={['инновации', 'грант']} title={'Название статьи'} text={'Краткое содержание статьи ...'} data={'12.08.67'} nameCompany={'JJY '}/>
            <Post href={'#0'} postTags={['технологии']} title={'Название статьи'} text={'Краткое содержание статьи ...'} data={'12.08.67'} nameCompany={'JJY '}/>
            <Post href={'#0'} postTags={[]} title={'Название статьи'} text={'Краткое содержание статьи ...'} data={'12.08.67'} nameCompany={'JJY '}/>

            {console.log(clickTags)}
        </div>
    );
};

export default News;