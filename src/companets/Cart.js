import React from "react";
import { Link } from "react-router-dom";
import "../style/Cart.css"

export default function Cart({ img, Price, Quantity, name, size, color}) {
    return (
        <>
            <div className="container">
                <div className="shop-title">
                    <h1>Корзина</h1>
                    <div className="karta">
                        <><Link to="/">Главная</Link></>
                        <div className="tere"></div>
                        <><Link to="/Cart">Корзина</Link></>
                    </div>
                </div>
                <div className="karzina-info">
                    <div className="karzina-title">
                        <div className="tavar">
                            <h1>Товар</h1>
                        </div>
                        <div className="title-info">
                            <h1>Цена</h1>
                            <h1>Количество</h1>
                            <h1>Всего</h1>
                        </div>
                    </div>
                    <div className="karzina-content">
                        <div className="korzina-photo" id="photo-kar"><img src={img} alt="" /></div>
                        <div className="k-photo-info">
                            <div className="narx"></div>
                            <div className="kolichestva"></div>
                            <div className="athors"></div>
                        </div>
                    </div>
                    <div className="karzina-footer">
                        <form className="inputBox">
                            <input type="text" required="required"/>
                            <span>Введите купон</span>
                            <button className="kuponBtn">Применить купон</button>
                        </form>
                        <button className="obnavit-kar">Обновить корзину</button>
                        
                    </div>
                    <div className="all-product">
                        <div className="patog">
                            <p>Подытог: </p><span>$0</span> 
                        </div>
                        <div className="itog">
                            <div className="itog-info">
                                <h2>Итого: </h2> <span>$0</span>
                            </div>
                            <><Link to="/Checkout" className="checkout">Оформить заказ</Link></>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}