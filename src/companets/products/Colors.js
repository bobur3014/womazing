import React, { useState } from "react";

export default function Colors() {
    const [color, setColor] = useState("gray")

    function Color(el) {
        setColor(el)
    }

    return (
        <>
            <div className="colors">
                <div id="color" className={color === "grain" ? "active" : ""} onClick={() => Color("grain")}></div>
                <div id="color" className={color === "gray" ? "active" : ""} onClick={() => Color("gray")}></div>
                <div id="color" className={color === "red" ? "active" : ""} onClick={() => Color("red")}></div>
                <div id="color" className={color === "yellow" ? "active" : ""} onClick={() => Color("yellow")}></div>
            </div>
        </>
    )
}