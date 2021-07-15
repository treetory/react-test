import React from "react";
import "../css/Display.css";
// import PropTypes from "prop-types";

export default function Display(props) {
    return (
        <div className="component-display">
            <div>{props.value}</div>
        </div>
    )
}