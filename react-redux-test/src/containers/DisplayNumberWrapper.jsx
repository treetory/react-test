import React, { useEffect, useState } from "react";
import DisplayNumber from "../components/DisplayNumber";
import store from "../store/store";

function DisplayNumberWrapper(props) {
    var [number, setNumber] = useState(store.getState().number); 
    useEffect(function() {
        store.subscribe(function() {
            setNumber(store.getState().number);
        })
    })
    return (
        <div>
            <DisplayNumber number={number}></DisplayNumber>
        </div>
    )
}

export default DisplayNumberWrapper;