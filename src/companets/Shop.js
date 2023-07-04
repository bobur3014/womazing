import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Shop.css";

function Shop() {

    const [toggleState, setToggleState] = useState(1)
    const [footerState, setFooterState] = useState(2)
    function toggleTab(idx) {
        setToggleState(idx)
    }
    
    function footerTab(index) {
        setFooterState(index)
    }
    return (
            <div className="container">
                <div className="tabs">
                <div className="shop-title">
                    <h1>Магазин</h1>
                    <div className="karta">
                        <><Link to="/">Главная</Link></>
                        <div className="tere"></div>
                        <><Link to="/Shop">Магазин</Link></>
                    </div>
                </div>
                <ul className="tabs__caption">
                    <li className={toggleState === 1 ? "active" : ""} onClick={() => toggleTab(1)}><Link to="/Shop" >Все</Link></li>
                    <li className={toggleState === 2 ? "active" : ""} onClick={() => toggleTab(2)}><Link to="/Shop" >Пальто</Link></li>
                    <li className={toggleState === 3 ? "active" : ""} onClick={() => toggleTab(3)}><Link to="/Shop">Свитшоты</Link></li>
                    <li className={toggleState === 4 ? "active" : ""} onClick={() => toggleTab(4)}><Link to="/Shop">Кардиганы</Link></li>
                    <li className={toggleState === 5 ? "active" : ""} onClick={() => toggleTab(5)}><Link to="/Shop">Толстовки</Link></li>
                </ul>
                    <div className={toggleState === 1 ? "tabs__content active" : "tabs__content"} >
                        <div id="content" className={footerState === 2 ? "active" : ""}>
                            <h3>Показано: 9 из 12 товаров</h3>
                            <div className="content-imgs">
                                <div className="collection">
                                    <div className="coll-img">
                                        <img src={require("../img/futbolka-usa.png")} alt=""/>
                                        <><Link to="/Shop/USA"><img src={require("../img/arrow-hover.png")} alt=""/></Link></>
                                    </div>
                                    <p>Футболка USA</p>
                                    <span>$229 $129</span>
                                </div>
                                <div className="collection">
                                    <div className="coll-img">
                                        <img src={require("../img/kupalnik-glow.png")} alt=""/>
                                        <><Link to="/Shop/Glow"><img src={require("../img/arrow-hover.png")} alt=""/></Link></>
                                    </div>
                                    <p>Купальник Glow</p>
                                    <span>$129</span>
                                </div>
                                <div className="collection">
                                    <div className="coll-img">
                                        <img src={require("../img/svitshot-sweetShot.png")} alt=""/>
                                        <><Link to="/Shop/SweetShot"><img src={require("../img/arrow-hover.png")} alt=""/></Link></>
                                    </div>
                                    <p>Свитшот Sweet Shot</p>
                                    <span>$129</span>
                                </div>
                                <div className="collection">
                                    <div className="coll-img">
                                        <img src={require("../img/futbolka-usa.png")} alt=""/>
                                        <><Link to="/Shop/USA"><img src={require("../img/arrow-hover.png")} alt=""/></Link></>
                                    </div>
                                    <p>Футболка USA</p>
                                    <span>$229 $129</span>
                                </div>
                                <div className="collection">
                                    <div className="coll-img">
                                        <img src={require("../img/kupalnik-glow.png")} alt=""/>
                                        <><Link to="/Shop/Glow"><img src={require("../img/arrow-hover.png")} alt=""/></Link></>
                                    </div>
                                    <p>Купальник Glow</p>
                                    <span>$129</span>
                                </div>
                                <div className="collection">
                                    <div className="coll-img">
                                        <img src={require("../img/svitshot-sweetShot.png")} alt=""/>
                                        <><Link to="/Shop/SweetShot"><img src={require("../img/arrow-hover.png")} alt=""/></Link></>
                                    </div>
                                    <p>Свитшот Sweet Shot</p>
                                    <span>$129</span>
                                </div>
                                <div className="collection">
                                    <div className="coll-img">
                                        <img src={require("../img/futbolka-usa.png")} alt=""/>
                                        <><Link to="/Shop/USA"><img src={require("../img/arrow-hover.png")} alt=""/></Link></>
                                    </div>
                                    <p>Футболка USA</p>
                                    <span>$229 $129</span>
                                </div>
                                <div className="collection">
                                    <div className="coll-img">
                                        <img src={require("../img/kupalnik-glow.png")} alt=""/>
                                        <><Link to="/Shop/Glow"><img src={require("../img/arrow-hover.png")} alt=""/></Link></>
                                    </div>
                                    <p>Купальник Glow</p>
                                    <span>$129</span>
                                </div>
                                <div className="collection">
                                    <div className="coll-img">
                                        <img src={require("../img/svitshot-sweetShot.png")} alt=""/>
                                        <><Link to="/Shop/SweetShot"><img src={require("../img/arrow-hover.png")} alt=""/></Link></>
                                    </div>
                                    <p>Свитшот Sweet Shot</p>
                                    <span>$129</span>
                                </div>
                            </div>
                            <h3>Показано: 9 из 12 товаров</h3>
                        </div>
                        <div id="content" className={footerState === 1 ? "active" : ""}>
                            <h3>Показано: 12 из 12 товаров</h3>
                            <div className="content-imgs">
                                <div className="collection">
                                    <div className="coll-img">
                                        <img src={require("../img/kupalnik-glow.png")} alt=""/>
                                        <><Link to="/Shop/Glow"><img src={require("../img/arrow-hover.png")} alt=""/></Link></>
                                    </div>
                                    <p>Купальник Glow</p>
                                    <span>$129</span>
                                </div>
                                <div className="collection">
                                    <div className="coll-img">
                                        <img src={require("../img/futbolka-usa.png")} alt=""/>
                                        <><Link to="/Shop/USA"><img src={require("../img/arrow-hover.png")} alt=""/></Link></>
                                    </div>
                                    <p>Футболка USA</p>
                                    <span>$229 $129</span>
                                </div>
                                <div className="collection">
                                    <div className="coll-img">
                                        <img src={require("../img/svitshot-sweetShot.png")} alt=""/>
                                        <><Link to="/Shop/SweetShot"><img src={require("../img/arrow-hover.png")} alt=""/></Link></>
                                    </div>
                                    <p>Свитшот Sweet Shot</p>
                                    <span>$129</span>
                                </div>
                            </div>
                            <h3>Показано: 12 из 12 товаров</h3>
                        </div>
                        <ul className="tabs-footer">
                            <botton className="bottonImgLeft"><img src={require("../img/arrow-left.png")} alt="" className={footerState === 1 ? "left-btn active" : "left-btn"} onClick={() => footerTab(2)}/></botton>
                            <button className="bottonOwn"><li className={footerState === 2 ? "btnOwn active" : "btnOwn"} onClick={() => footerTab(2)}>1</li></button>
                            <button className="bottonTwo"><li className={footerState === 1 ? "btnTwo active" : "btnTwo"} onClick={() => footerTab(1)}>2</li></button>
                            <button className="bottonTmgRight"><img src={require("../img/arrow-right .png")} alt="" className={footerState === 2 ? "right-btn active": "right-btn" } onClick={() => footerTab(1)} /></button>
                        </ul>
                    </div>
                    <div className={toggleState === 2 ? "tabs__content active" : "tabs__content"}>
                        <h3>Показано: 3 из 3 товаров</h3>
                        <div className="content-imgs">
                            <div className="collection">
                                <div className="coll-img">
                                    <img src={require("../img/futbolka-usa.png")} alt=""/>
                                    <><Link to="/Shop/USA"><img src={require("../img/arrow-hover.png")} alt=""/></Link></>
                                </div>
                                <p>Футболка USA</p>
                                <span>$229 $129</span>
                            </div>
                            <div className="collection">
                                <div className="coll-img">
                                    <img src={require("../img/kupalnik-glow.png")} alt=""/>
                                    <><Link to="/Shop/Glow"><img src={require("../img/arrow-hover.png")} alt=""/></Link></>
                                </div>
                                <p>Купальник Glow</p>
                                <span>$129</span>
                            </div>
                            <div className="collection">
                                <div className="coll-img">
                                    <img src={require("../img/svitshot-sweetShot.png")} alt=""/>
                                    <><Link to="/Shop/SweetShot"><img src={require("../img/arrow-hover.png")} alt=""/></Link></>
                                </div>
                                <p>Свитшот Sweet Shot</p>
                                <span>$129</span>
                            </div>
                        </div>
                        <h3>Показано: 3 из 3 товаров</h3>
                    </div>
                    <div className={toggleState === 3 ? "tabs__content active" : "tabs__content"}>
                        <h3>Показано: 1 из 1 товаров</h3>
                        <div className="collection">
                            <div className="coll-img">
                                <img src={require("../img/svitshot-sweetShot.png")} alt=""/>
                                <><Link to="/Shop/SweetShot"><img src={require("../img/arrow-hover.png")} alt=""/></Link></>
                            </div>
                            <p>Свитшот Sweet Shot</p>
                            <span>$129</span>
                        </div>
                        <h3>Показано: 1 из 1 товаров</h3>
                    </div>
                    <div className={toggleState === 4 ? "tabs__content active" : "tabs__content"}>
                        <h3>Показано: 1 из 1 товаров</h3>
                        <div className="collection">
                            <div className="coll-img">
                                <img src={require("../img/futbolka-usa.png")} alt=""/>
                                <><Link to="/Shop/USA"><img src={require("../img/arrow-hover.png")} alt=""/></Link></>
                            </div>
                            <p>Футболка USA</p>
                            <span>$229 $129</span>
                        </div>
                        <h3>Показано: 1 из 1 товаров</h3>
                    </div>
                    <div className={toggleState === 5 ? "tabs__content active" : "tabs__content"}>
                        <h3>Показано: 1 из 1 товаров</h3>
                        <div className="collection">
                            <div className="coll-img">
                                <img src={require("../img/kupalnik-glow.png")} alt=""/>
                                <><Link to="/Shop/Glow"><img src={require("../img/arrow-hover.png")} alt=""/></Link></>
                            </div>
                            <p>Купальник Glow</p>
                            <span>$129</span>
                        </div>
                        <h3>Показано: 1 из 1 товаров</h3>
                    </div>
                </div>
            </div>
    )
}

export default Shop;