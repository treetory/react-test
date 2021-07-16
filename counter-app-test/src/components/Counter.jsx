import React from "react";

export default function Counter(props) {

    const getBadgeClasses = () => {
        let classes = "badge m-2 badge-";
        classes += props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    const formatCount = () => {
        return props.counter.value === 0 ? "Zero" : props.counter.value;
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-1">
                    <span style={{fontSize: 24}} className={getBadgeClasses()}>
                        <p style={{color: "black", fontSize: 20}}>{formatCount()}</p>
                    </span>
                </div>
                <div className="col-md-4">
                    <button
                        className="btn btn-secondary"
                        onClick={() => {
                            props.onIncrement(props.counter);
                        }}
                    >
                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                    </button>
                    <button
                        className="btn btn-info m-2"
                        onClick={() => {
                            props.onDecrement(props.counter);
                        }}
                        disabled={props.counter.value === 0 ? "disabled" : ""}
                    >
                        <i className="fa fa-minus-circle" aria-hidden="true"></i>
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            props.onDelete(props.counter);
                        }}
                    >
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}