import React from "react";
// import AddNumber from "./AddNumber";
// import AddNumberWrapper from "../containers/AddNumberWrapper"
import AddNumberReactReduxWrapper from "../containers/AddNumberReactReduxWrapper";

function AddNumberRoot() {
    return (
        <div>
            <h1>Add Number Root</h1>
            {/* <AddNumberWrapper></AddNumberWrapper> */}
            <AddNumberReactReduxWrapper></AddNumberReactReduxWrapper>
        </div>
    )
}

export default AddNumberRoot;