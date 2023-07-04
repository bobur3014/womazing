import React from "react";
import "../style/ImportantUs.css";

function ImportantUs() {
    return (
        <>
        <div className="imortant-us">
            <div className="container">
                <h2 className="important-title">Что для нас важно</h2>
                <div className="important-content">
                    <div className="important-block">
                        <img src={require("../img/kachestva.png")} alt=""/>
                        <h3>Качество</h3>
                        <p>Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества</p>
                    </div>
                    <div className="important-block">
                        <img src={require("../img/skorost.png")} alt=""/>
                        <h3>Скорость</h3>
                        <p>Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах</p>
                    </div>
                    <div className="important-block">
                        <img src={require("../img/atvetsbvennest.png")} alt=""/>
                        <h3>Ответственность</h3>
                        <p>Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ImportantUs;