import React from 'react';
import './Post.css'

const Post = ({postTags, ...props}) => {
    
    function clickTarch(e){
        let url_array = e.target.dataset.url.split("//")
        let format_url = `http://127.0.0.1:5000/api/v1/news_archive/${url_array[url_array.length-1].split("/").join("***")}`
        let format_url_2 = format_url.split("?").join("----").split("&").join("-----")
        fetch(format_url_2,
        {
            method: 'GET',
            headers: {
                "Accept":"*/*",
                "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:101.0) Gecko/20100101 Firefox/101.0"
                }
        })
        .then(() =>
            window.location.reload()
        )
    }
    
    return (
        <>
        
        <div className='post-block post'>
            <h3 className='post__title'>{props.title}</h3>
            <a href={props.href} className='post__link'>Ссылка на статью</a>
            <p className='post__text'>
              <span>{props.text}</span> 
              
              <span className='post__tags'>
                
                {
                    postTags.map((elem) => elem ? <span># {elem} </span> : <span></span>)
                }
                </span>
            </p>
            <p className='post__data'>{props.data}</p>
            <p className='post__nameCompany'>Компании: {props.nameCompanies}</p>
            <button className='post__btn' data-url={props.href} onClick={clickTarch} type="submit">В архив</button>
        </div>
        </>
    );
};

export default Post;