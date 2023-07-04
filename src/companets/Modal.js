import React, { useState } from "react";
import "../style/Modal.css";

function Modal({active, setactive}) {
    const [formsub, setFormsub] = useState('modal-Two')
    
    const formSub = (m) => {
        m.preventDefault()
        setFormsub("modal-Two active")
    }
    return(
        <>
            <div className={active ? "modal active" : "modal"} onClick={() => setactive(false)}>
                <div className={formsub === 'modal-Two active' ? "modal-out_none" : "modal-out"} onClick={e => e.stopPropagation()}>
                    <img src={require("../img/Close.png")} alt="" className="closeImg" onClick={() => setactive(false)}/>
                    <div className="modal-in">
                        <h2>Заказать обратный звонок</h2>
                        <form action="" className="modalForm" onSubmit={formSub}>
                            <div className="inputBox">
                                <input type="text" required="required"/>
                                <span>Имя</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" required="required"/>
                                <span>E-mail</span>
                            </div>
                            <div className="inputBox">
                                <input type="tel" required="required"/>
                                <span>Телефон</span>
                            </div>
                            <button type="submit">Заказать звонок</button>
                        </form>
                    </div>
                </div>
                <div className={formsub}>
                    <h1>Отлично! Мы скоро вам перезвоним.</h1>
                    <button className="closeBtn" onClick={() => setactive(false)}>Закрыть</button>
                </div>
            </div>
        </>
    )
}
export default Modal;