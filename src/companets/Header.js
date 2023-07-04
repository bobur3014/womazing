import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../style/header.css";
import Modal from "./Modal";

function Header() {
    const [modalActive, setModalActive] = useState(false)
    return (
        <React.Fragment>
            <header className="header">
                <div className="container">
                    <nav className="nav">
                        <div className="logo">
                            <><NavLink to='/'><img src={require('../img/logo.png')} alt="WOMAZING" /></NavLink></>
                            <><NavLink to='/'><h1>Womizing</h1></NavLink></>
                        </div>
                        <ul className="navigation">
                            <li><NavLink to='/' >Главная</NavLink></li>
                            <li><NavLink to='/Shop'>Магазин</NavLink></li>
                            <li><NavLink to='/About'>O бренде</NavLink></li>
                            <li><NavLink to='/Contact'>Контакты</NavLink></li>
                        </ul>
                        <div className="tel-karzina">
                            <><Link className="tel-m" onClick={() => setModalActive(true)}><div className="phone"></div></Link></>
                            <h2>+7 (495) 823-54-12</h2>
                            <>
                            <Link to="/Cart">
                                <img src={require('../img/korzinka.png')} alt="Korzina"></img>
                                <div className="korzina-info"></div>
                            </Link>
                            </>
                        </div>
                    </nav>
                </div>
            </header>
            <Modal active={modalActive} setactive={setModalActive}/>
        </React.Fragment>
    )
}

export default Header;