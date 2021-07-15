import React from "react";
import "../css/Button.css";

export default function Button(props) {
    const className = [
        "component-button",
        props.orange ? "orange" : "",
        props.wide ? "wide" : "",
    ]
    return (
        <div className={className.join(" ").trim()}>
            <button onClick={function() {
                props.clickHandler(props.name);
            }}>{props.name}</button>
        </div>
    )
}