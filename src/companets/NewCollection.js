import React from "react";
import { Link } from "react-router-dom";
import "../style/newCollection.css";

function NewCollection() {
    return (
        <>
        <div className="new-collection" id="new-collection">
            <div className="container">
                <h2 className="newCollection-title">Новая коллекция</h2>
                <div className="collections">
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
                <><Link to="/Shop" className="collection-btn">Открыть магазин</Link></>
            </div>
        </div>
        </>
    )
}

export default NewCollection;