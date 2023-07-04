import React, { useState } from "react";

export default function Sizes() {
    const [size, setSize] = useState("S")
    function Size(el) {
        setSize(el)
    }
    return (
        <>
            <div className="sizies">
                <button id="size" className={size === "M" ? "active" : ""} onClick={() => Size("M")}>M</button>
                <button id="size" className={size === "S" ? "active" : ""} onClick={() => Size("S")}>S</button>
                <button id="size" className={size === "L" ? "active" : ""} onClick={() => Size("L")}>L</button>
                <button id="size" className={size === "XL" ? "active" : ""} onClick={() => Size("XL")}>XL</button>
                <button id="size" className={size === "XXL" ? "active" : ""} onClick={() => Size("XXL")}>XXL</button>
            </div>
        </>
    )
}