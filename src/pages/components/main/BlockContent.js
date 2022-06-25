import React from 'react';
import './BlockContent.css';

const BlockContent = ({id, title, content, img}) => {
    const ID = id % 2 !== 0;
    return (
        <div className='blockContent'>
            <div className={ID ? 'blockContent-text order' : 'blockContent-text'} >
                <h2 className='blockContent-title'>{title}</h2>
                <p className='blockContent-content'>{content}</p>
            </div>
            <div className='BlockContent-img'><img src={img}/></div>
        </div>
    );
};

export default BlockContent;