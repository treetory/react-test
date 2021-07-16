import React from "react";
import Counter from "./Counter";

export default function Counters(props) {
    var _counters = Array.from(props.counters);
    return (
        <div>
            <button
                className="btn btn-success m-2"
                onClick={props.onReset}
                disabled={props.counters.length === 0 ? "disabled" : ""}
            >
                <i className="fa fa-refresh" aria-hidden="true"></i>
            </button>
            <button
                className="btn btn-primary m-2"
                onClick={props.onRestart}
                disabled={props.counters.length !== 0 ? "disabled" : ""}
            >
                <i className="fa fa-recycle" aria-hidden="true"></i>
            </button>
            {
                _counters.map(counter => (
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onIncrement={props.onIncrement}
                        onDecrement={props.onDecrement}
                        onDelete={props.onDelete}
                    ></Counter>
                ))
            }
        </div>
    )
}