import React from 'react'
import "./Navbar.css"
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from '../../firebase/FirebaseConfig';
import { useContext } from "react"
import { UserContextApi } from '../../context/UserContext';
import logotip from "../../Images/logotip.png"
// import input from "../Navbar/Navbar.js/input"




function Navbar() {
    // const { Username } = useContext(UserContextApi)
    // console.log(Username)
    // const provider = new GoogleAuthProvider()




    // const SignGoogle = () => {
    //     signInWithPopup(auth, provider)
    //         .then((result) => {
    //             console.log(result)
    //         }).catch((error) => {
    //             console.log(error)
    //         });
    // }

    function OpenBox() {
        document.getElementById("absolute_box").style.transform = "translateY(247px) translateX(-120px)"
    }
    function CloseBox() {
        document.getElementById("absolute_box").style.transform = "translateY(-2000px)"
    }



    return (
        <nav>
            <img src={logotip} alt="" className='logo' />
            <select name="" id="">
                <option value="1">Все категории</option>
                <option value="2">Техника для дома</option>
                <option value="3">Офисная техника</option>
                <option value="4">Техника для кухни</option>
                <option value="1">Все категории</option>
                <option value="2">Техника для дома</option>
                <option value="3">Офисная техника</option>
                <option value="4">Техника для кухни</option>
            </select>
            <input onBlur={CloseBox} onFocus={OpenBox} type="text" />
            <div id="absolute_box">
                <p>Смартфоны</p>
                <p>Техника для кухни</p>
                <p>Компютеры</p>
                <p>Мебель</p>
                <p>Книги</p>
                <p>Посудомойки</p>
                <p>Стиральные машины</p>
                <p>Концелярия</p>
                <p>Посуды</p>
                <p>Другое</p>
            </div>
            <div className="search" placeholder='Search...'>Search</div>
            <ul>
                <li>Статус заказа</li>
                <li>Вход</li>
                <li>Сравнение</li>
                <li>Избранное</li>
                <li>Корзина</li>
            </ul>

        </nav>
    )
}

export default Navbar
