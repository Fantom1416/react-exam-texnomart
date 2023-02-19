import React from 'react'
// import logo from "../../Images/logo.png"
import "./Undernav.css"

function UnderNav() {
    return (

        <div className='undernav'>
            <ul className='ul'>
                <li>Каталог</li>
                <li>АКЦИИ</li>
                <li>СМАРТФОНЫ</li>
                <li>ХОЛОДИЛЬНИКИ</li>
                <li>ПЫЛЕСОСЫ</li>
                <li>КОНДИЦИОНЕРЫ</li>
                <li>НОУТБУКИ</li>
                <li>ТЕЛЕВИЗОРЫ</li>
                <li><a href="admin">ВОЙТИ</a></li>
            </ul>
            <ul className='ul2'>
                <li>Каталог</li>
                <li>Сравнение</li>
                <li>Корзина</li>
                <li>Избранное</li>
                <li><a href="admin">Вход</a></li>
            </ul>
        </div>
    )
}

export default UnderNav
