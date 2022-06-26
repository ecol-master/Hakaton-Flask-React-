import React from "react";
import "./Tags.css";

const Tags = ({...props}) => {

  function clickTags(e) {
    props.setClickTags({name: e.target.innerText});
    localStorage.setItem("key_word", e.target.innerText);
    window.location.reload()
  }

  function clickDeleteFilter() {
    props.setClickTags({name: null});
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className='block-tags tags'>
        <h2 className='tags__title'>Теги</h2>
      <ul className='tags__list'>
        {
            props.tags.map((elem, ind) => <li id={ind+1} className='tags__item' onClick={clickTags}>{elem}</li>)
        }  
      </ul>
      <div className='tags__item btn-clear-filter' onClick={clickDeleteFilter}>Сбросить фильтры</div>
    </div>
  );
};

export default Tags;
