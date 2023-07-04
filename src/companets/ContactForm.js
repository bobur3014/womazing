import React, { useState } from "react";

export default function ContactForm() {
    const [submitText, setSubmitText] = useState('');

    const FormSubmit = (m) => {
        m.preventDefault()
        setSubmitText("Сообщение успешно отправлено")
    }
    return (
        <>
            <form action="" className="submitMasseg" onSubmit={FormSubmit}>
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
                <div className="inputBox">
                    <textarea required="required"></textarea>
                    <span>Сообщение</span>
                </div>
                <button type="submit">Отправить</button>
                <h1 className={submitText === "" ? "" : "afterSub"}>{submitText}</h1>
            </form>
        </>
    )
}