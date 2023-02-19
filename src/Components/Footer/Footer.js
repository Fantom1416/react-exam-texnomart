import React from 'react'
import "./Footer.scss"
import gp from "../../Images/gp.png"

function Footer() {
    return (
        <footer>
            <div className="colona1">
                <span>Возник вопрос?Звоните</span>
                <h1>+998 71 209 99 44</h1>
                <img src={gp} alt="" />
                <a href="#">Адреса магазинов Ташкент</a>
            </div>
            <div className="colona2">
                <h2>Компания</h2>
                <h3>B2B продажи
                </h3>
                <h3>О Техномарт
                </h3>
                <h3>Новости и обзоры
                </h3>
                <h3>Проверка IMEI
                </h3>
            </div>
            <div className="colona3">
                <h2>
                    Информация
                </h2>
                <h3>
                    Бесплатная доставка
                </h3>
                <h3>
                    Бонусная система
                </h3>
                <h3> Работа в Техномарт</h3>

                <h3>Личный кабинет</h3>
                <h3>Контактные номера</h3>
            </div>
            <div className="colona4">
                <h2>Помощь покупателю
                </h2>
                <h3>Покупка в рассрочку
                </h3>
                <h3>Возврат товара
                </h3>
                <h3>Гарантия на товары
                </h3>
                <h3>Часто задаваемые вопросы
                </h3>
            </div>
        </footer>
    )
}

export default Footer
