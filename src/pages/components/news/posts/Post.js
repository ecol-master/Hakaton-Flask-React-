import React from 'react';
import './Post.css'

const Post = ({postTags, ...props}) => {
    return (
        <>
        
        <div className='post-block post'>
            <h3 className='post__title'>{props.title}</h3>
            <a href={props.href} className='post__link'>Ссылка на статью</a>
            <p className='post__text'>
              <span>{props.text}</span> 
              
              <span className='post__tags'>
                
                {
                    postTags.map((elem) => elem ? <span>#{elem} </span> : <span></span>)
                }
                </span>
            </p>
            <p className='post__data'>{props.data}</p>
            <p className='post__nameCompany'>Компании: {props.nameCompany}</p>
            <button className='post__btn'>В архив</button>
        </div>
        </>
    );
};

export default Post;