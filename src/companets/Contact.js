import React from "react";
import { Link } from "react-router-dom";
import Map from "./Map";
import "../style/Contact.css"
import ContactForm from "./ContactForm";

export default function Contact() {
    return(
        <>
            <div className="container">
                <div className="shop-title">
                    <h1>Контакты</h1>
                    <div className="karta">
                        <><Link to="/">Главная</Link></>
                        <div className="tere"></div>
                        <><Link to="/Contact">Контакты</Link></>
                    </div>
                </div>
                <div className="contact">
                    <div id="map" >
                        <Map/>
                    </div>
                    <div className="contact-info">
                        <div className="cinfo">
                            <h2>Телефон</h2>
                            <p>+7 (495) 823-54-12</p>
                        </div>
                        <div className="cinfo">
                            <h2>E-mail</h2>
                            <p>info@sitename.com</p>
                        </div>
                        <div className="cinfo">
                            <h2>Адрес</h2>
                            <p>г. Москва, 3-я улица Строителей, 25</p>
                        </div>
                    </div>
                    <div className="massage">
                        <h1>Напишите нам</h1>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </>
    )
}
