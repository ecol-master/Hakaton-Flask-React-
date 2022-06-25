import React from 'react';
import Title from './components/header/title/Title';
import Frame from './main-frame.svg';
import BlockContent from './components/main/BlockContent';
import frameOneMain from './components/main/img/frame-one.svg';
import frameTwoMain from './components/main/img/frame-two.png';

const HomePage = () => {
    return (
        <div>
            <div className='wrapper-content'>
          <Title />
          <div className='header__img'><img src={Frame} alt='frame' /></div>
        </div>
            <main className='block-main'>
        <BlockContent id={1} title='Инновации' content='Нововведение в области техники, технологии, организации труда или управления, основанное на использовании достижений науки и передового опыта, обеспечивающее качественное повышение эффективности производственной системы или качества продукции.' img={frameOneMain}/>
        <BlockContent id={2} title='Технологии' content='Технологиями Искусственного Интеллекта в широком плане называют программное обеспечение, способное выполнять задачи, для выполнения которых традиционно требуется использование когнитивных способностей человека — распознавание речи и визуальных образов, принятие аналитических решений, сложные логические операци ...' img={frameTwoMain}/>
      </main>
            
        </div>
    );
};

export default HomePage;