import React from "react";
import { Link } from "react-router-dom";
import "../../style/Product.css"
import Colors from "./Colors";
import ProductBtn from "./ProductBtn";
import Sizes from "./Sizes";

export default function ProductGlow() {
    return (
        <>
            <div className="container">
                <div className="shop-title">
                    <h1>Футболка USA</h1>
                    <div className="karta">
                        <><Link to="/">Главная</Link></>
                        <div className="tere"></div>
                        <><Link to="/Shop">Магазин</Link></>
                        <div className="tere"></div>
                        <><Link to="/Shop/Glow">Купальник Glow</Link></>
                    </div>
                </div>
                <div className="things">
                    <div className="thing-img">
                        <img src={require("../../img/kupalnik-glow.png")} alt=""/>
                    </div>
                    <div className="thing-info">
                        <div className="thing-money">
                            <span>$129</span>
                            <span>$311</span>
                        </div>
                        <div className="thing-size">
                            <h3>Выберите размер</h3>
                            <Sizes/>
                        </div>
                        <div className="thing-color">
                            <h3>Выберите цвет</h3>
                            <Colors/>
                        </div>
                        <div className="thing-cart">
                            <ProductBtn/>
                        </div>
                    </div>
                </div>
                <div className="things-use">
                    <h1>Связанные товары</h1>
                    <div className="use-collection">
                        <div className="collection">
                            <div className="coll-img">
                                <img src={require("../../img/futbolka-usa.png")} alt=""/>
                                <><Link to="/Shop/USA"><img src={require("../../img/arrow-hover.png")} alt=""/></Link></>
                            </div>
                            <p>Футболка USA</p>
                            <span>$129</span>
                        </div>
                        <div className="collection">
                            <div className="coll-img">
                                <img src={require("../../img/svitshot-sweetShot.png")} alt=""/>
                                <><Link to="/Shop/SweetShot"><img src={require("../../img/arrow-hover.png")} alt=""/></Link></>
                            </div>
                            <p>Свитшот Sweet Shot</p>
                            <span>$129</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}