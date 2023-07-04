import React from "react";
import { Link } from "react-router-dom";
import "../style/SquadWomazing.css";
import IndividualIntervalsExample from "./Slider";

function SquadWomazing() {
    return (
        <>
        <div className="squad-womazing">
            <div className="container">
                <h2 className="squad-title">Команда мечты Womazing</h2>
                <div className="squad-content">
                    <div className="carousel">
                        <IndividualIntervalsExample/>
                    </div>
                    <div className="squad-info">
                        <h2>Для каждой</h2>
                        <p>Каждая девушка уникальна. Однако, мы схожи в <br/>
                            миллионе мелочей.
                            <br/> <br/>
                            Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.
                        </p>
                        <><Link to="/About">Подробнее о бренде</Link></>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SquadWomazing;