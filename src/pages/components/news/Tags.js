import React from "react";
import "./Tags.css";

const Tags = ({...props}) => {

  function clickTags(e) {
    props.setClickTags({name: e.target.innerText})
  }

  return (
    <div className='block-tags tags'>
        <h2 className='tags__title'>Теги</h2>
      <ul className='tags__list'>
        {
            props.tags.map((elem, ind) => <li id={ind+1} className='tags__item' onClick={clickTags}>{elem}</li>)
        }  
      </ul>
    </div>
  );
};

export default Tags;
