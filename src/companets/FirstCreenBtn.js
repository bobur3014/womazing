import React from "react";
import { Link } from "react-router-dom";

export default function FirstCreenBtn() {
    return (
        <>
            <div className="left-buttons">
                <>
                    <Link href="#new-collection" className="button-arrow">
                        <img src={require('../img/arrow.png')} alt=""/>
                    </Link>
                    <Link to="/Shop" className="button-shop">
                        Открыть магазин
                    </Link>
                </>
            </div>
        </>
    )
}