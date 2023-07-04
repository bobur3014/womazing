import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../style/Footer.css";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="content-one">
                            <div className="logo">
                                <><Link to="/"><img src={require("../img/logo.png")} alt=""/></Link></>
                                <><Link to="/"><h1>Womazing</h1></Link></>
                            </div>
                            <div className="logo-info">
                                <h3>© Все права защищены</h3>
                                <h3>Политика конфиденциальности</h3>
                                <h3>Публичная оферта</h3>
                            </div>
                        </div>
                        <div className="content-twoo">
                            <ul className="navigation">
                                <li><NavLink to="/">Главная</NavLink></li>
                                <li><NavLink to="/Shop">Магазин</NavLink>
                                    <ul className="list">
                                        <li><NavLink to="/Shop">Пальто</NavLink></li>
                                        <li><NavLink to="/Shop">Свитшоты</NavLink></li>
                                        <li><NavLink to="/Shop">Кардиганы</NavLink></li>
                                        <li><NavLink to="/Shop">Толстовки</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to="/About">O бренде</NavLink></li>
                                <li><NavLink to="/Contact">Контакты</NavLink></li>
                            </ul>
                        </div>
                        <div className="content-three">
                            <><Link to="tel:+7 (495) 823-54-12">+7 (495) 823-54-12</Link></>
                            <><Link to="hello@womazing.com">hello@womazing.com</Link></>
                            <div className="links">
                                <img src={require("../img/instagram (1) 1.png")} alt=""/>
                                <img src={require("../img/facebook (1) 1.png")} alt=""/>
                                <img src={require("../img/twitter (1) 1.png" )}alt=""/>
                            </div>
                            <img src={require("../img/visa-mastercard 1.png")} alt="" className="visa"/>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;