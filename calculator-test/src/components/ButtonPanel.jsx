import React from "react";
import Button from  "./Button";
import "../css/ButtonPanel.css";

export default function ButtonPanel(props) {
    return (
        <div className="component-button-panel">
            <div>
                <Button name="AC" clickHandler={props.clickHandler}></Button>
                <Button name="+/-" clickHandler={props.clickHandler}></Button>
                <Button name="%" clickHandler={props.clickHandler}></Button>
                <Button name="÷" clickHandler={props.clickHandler} orange></Button>
            </div>
            <div>
                <Button name="7" clickHandler={props.clickHandler}></Button>
                <Button name="8" clickHandler={props.clickHandler}></Button>
                <Button name="9" clickHandler={props.clickHandler}></Button>
                <Button name="x" clickHandler={props.clickHandler} orange></Button>
            </div>
            <div>
                <Button name="4" clickHandler={props.clickHandler}></Button>
                <Button name="5" clickHandler={props.clickHandler}></Button>
                <Button name="6" clickHandler={props.clickHandler}></Button>
                <Button name="-" clickHandler={props.clickHandler} orange></Button>
            </div>
            <div>
                <Button name="1" clickHandler={props.clickHandler}></Button>
                <Button name="2" clickHandler={props.clickHandler}></Button>
                <Button name="3" clickHandler={props.clickHandler}></Button>
                <Button name="+" clickHandler={props.clickHandler} orange></Button>
            </div>
            <div>
                <Button name="0" clickHandler={props.clickHandler} wide></Button>
                <Button name="." clickHandler={props.clickHandler}></Button>
                <Button name="=" clickHandler={props.clickHandler} orange></Button>
            </div>
        </div>
    )
}