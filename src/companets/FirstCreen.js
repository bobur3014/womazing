import React from "react";
import FirstCreenSlider from "./FisrtCreenClider";
import "../style/firstCreen.css";
import FirstCreenBtn from "./FirstCreenBtn";

function FirstCreen() {
    return (
        <>
            <div className="first-screen">
                <div className="left">
                    <div className="first-slider">
                        <FirstCreenSlider/>
                        <FirstCreenBtn/>
                    </div>
                </div>
                <div className="right">
                    <div className="right-img">
                    </div>
                </div>
            </div>
        </>
    );
}

export default FirstCreen;