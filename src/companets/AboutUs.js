import React from "react";
import { Link } from "react-router-dom";
import "../style/About.css"

function AboutUs() {
    return (
        <>
            <div className="container">
                <div className="shop-title">
                    <h1>О бренде</h1>
                    <div className="karta">
                        <><Link to="/">Главная</Link></>
                        <div className="tere"></div>
                        <><Link to="/About">О бренде</Link></>
                    </div>
                </div>
                <div className="about">
                    <div className="about-content">
                        <img src={require("../img/about-first.png")} alt=""/>
                        <div className="aboutContent-info">
                            <h2>Идея и женщина</h2>
                            <p>Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.
                                <br/><br/>
                                Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний. 
                            </p>
                        </div>
                    </div>
                    <div className="about-content">
                        <div className="aboutContent-info">
                            <h2>Магия в деталях</h2>
                            <p>Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.
                                <br/><br/>
                                Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало. 
                            </p>
                        </div>
                        <img src={require("../img/about-second.png")} alt=""/>
                    </div>
                </div>
                <div className="about-btn">
                    <><Link to="/Shop" className="about-btn">Перейти в магазин</Link></>
                </div>
            </div>
        </>
    )
}

export default AboutUs;