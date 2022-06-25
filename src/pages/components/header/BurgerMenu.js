import React from 'react';
import './BurgerMenu.css';
import {Link} from 'react-router-dom';

const BurgerMenu = ({active, setActive}) => {
    return (
        <div className={active ? 'modal-menu active' : 'modal-menu'} onClick={() => setActive(false)}>
            <div className='menu__content' onClick={(e) => e.stopPropagation()}>
            <ul className='menu__list'>
                <li className=''><Link to='/' className=''>Главная</Link></li>
                <li className=''><Link to='/news' className=''>Новости</Link></li>
                <li className=''><Link to='/archive' className=''>Архив</Link></li>
            </ul>
            </div>
        </div>
    );
};

export default BurgerMenu;