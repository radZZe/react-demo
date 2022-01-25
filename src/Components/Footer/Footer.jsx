import React from 'react'
import classname from './Footer.module.css'
import logo from '../../assets/img/logo.png'

const Footer =() => {
    return (
        <div className={classname.wrapper}>
            <div className={classname.wrapper__inner}>
                <div className={classname.logo}>
                    <img src={logo} alt="" />
                    <span>Выбирая нашу компанию, вы получаете гарантию высокого качества услуг и надежности.<br/> 
                            Мы обслуживаем уникальные потребности наших клиентов из самых разных отраслей.</span>
                </div>
                <div className={classname.menu}>
                    <h3>Меню</h3>
                    <ul>
                        <a href='https://freegatelogistic.ru/%d0%bd%d0%b0%d1%88%d0%b8-%d1%83%d1%81%d0%bb%d1%83%d0%b3%d0%b8/'><li>Наши услуги</li></a>
                        <a href='https://freegatelogistic.ru/%d0%be-%d0%bd%d0%b0%d1%81/'><li>О нас </li></a>
                        <a href='https://freegatelogistic.ru/%d0%be%d1%82%d1%81%d0%bb%d0%b5%d0%b6%d0%b8%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5/'><li >Отслеживание</li></a>
                        <a href='#'><li>Калькулятор</li></a>
                        <a href='https://freegatelogistic.ru/%d0%b8%d0%bc%d0%bf%d0%be%d1%80%d1%82-%d1%8d%d0%ba%d1%81%d0%bf%d0%be%d1%80%d1%82/'><li >Импорт/Экспорт</li></a>
                        <a href='https://freegatelogistic.ru/%d0%be-%d0%bd%d0%b0%d1%81/'><li >Сотрудники</li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;