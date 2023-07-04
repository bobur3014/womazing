import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function IndividualIntervalsExample() {
    return (
        <Carousel>
            <Carousel.Item interval={3000}>
                <img className="d-block w-100" src={require("../img/squad.png")} alt="" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img className="d-block w-100" src={require("../img/squad2.png")} alt="" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <   img className="d-block w-100" src={require("../img/squad3.png")} alt="" />
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;