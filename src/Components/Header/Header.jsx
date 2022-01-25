import React from 'react'
import classname from './Header.module.css'
import logo from '../../assets/img/logo-inverse.png'
import document from '../../assets/img/document.png'

const Header = () => {
    return (
        <div className={classname.wrapper}>
            <div className={classname.subheader}>
                    <div className={classname.subheader__wrapper}>
                    <div className={classname.location}>
                        <img src="https://img.icons8.com/color/48/000000/marker--v1.png"/>
                        <span>Владивосток, ул. Светланская, д. 22</span>
                    </div>
                    <div className={classname.work__time}>Пн - Вс : 09:00 - 18:00</div>
                    <div className={classname.tel}>8 800 256 35 87</div>
                    <div className={classname.subheader__btn}>
                        <img src={document}/>
                        <a href="https://freegatelogistic.ru/%d1%81%d0%b4%d0%b5%d0%bb%d0%b0%d1%82%d1%8c-%d0%b7%d0%b0%d0%ba%d0%b0%d0%b7/">Сделать заказ</a>
                    </div>
                </div>
            </div>
            <div className={classname.wrapper__inner}>
                <div className={classname.logo}>
                    <a href='https://freegatelogistic.ru/'><img src={logo} alt="" /></a>
                </div>
                <div className={classname.nav__list}>
                <ul>
                        <a href='https://freegatelogistic.ru/%d0%bd%d0%b0%d1%88%d0%b8-%d1%83%d1%81%d0%bb%d1%83%d0%b3%d0%b8/'><li>Наши услуги</li></a>
                        <a href='https://freegatelogistic.ru/%d0%be-%d0%bd%d0%b0%d1%81/'><li>О нас </li></a>
                        <a href='https://freegatelogistic.ru/%d0%be%d1%82%d1%81%d0%bb%d0%b5%d0%b6%d0%b8%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5/'><li >Отслеживание</li></a>
                        <a href='#'><li>Калькулятор</li></a>
                        <a href='https://freegatelogistic.ru/%d0%b8%d0%bc%d0%bf%d0%be%d1%80%d1%82-%d1%8d%d0%ba%d1%81%d0%bf%d0%be%d1%80%d1%82/'><li >Импорт/Экспорт</li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Header;