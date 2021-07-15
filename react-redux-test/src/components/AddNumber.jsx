import React, {useState} from "react";

function AddNumber(props) {
    var [size, setSize] = useState(1);
    return (
        <div>
            <h1>Add Number</h1>
            <input type="button" value="+" onClick={function(e) {
                props.onClick(size)
            }}></input>
            <input type="text" value={size} onChange={function(e) {
                setSize(Number(e.target.value));
            }}></input>
        </div>
    )
}

export default AddNumber;