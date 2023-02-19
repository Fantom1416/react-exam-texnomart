import React from 'react'
import "./End.scss"

function End() {
    return (
        <div className="end">
            <div className="icons">
                <button>Показать еще</button>
                <h1>Популярные категории и модели</h1>

                <div className="obshiy">
                    <div className="spans1">
                        <span>Honor</span>
                        <span>Samsung</span>
                        <span>Asus</span>
                    </div>
                    <div className="spans2">
                        <span>Xiaomi</span>
                        <span>Infinix</span>
                        <span>Galaxy</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default End
