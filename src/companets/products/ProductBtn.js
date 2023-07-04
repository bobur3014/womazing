import React, { useState } from "react";

export default function ProductBtn() {

    const [counter, setCounter] = useState(0)
    function Counter() {
        setCounter(counter + 1)
    }
    return(
        <>
            <div className="number-thing">{counter}</div>
            <button className="add-cart" onClick={Counter}>Добавить в корзину</button>
        </>
    )
}