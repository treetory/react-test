import React from "react";
// import DisplayNumberWrapper from "../containers/DisplayNumberWrapper"
import DisplayNumberReactReduxWrapper from "../containers/DisplayNumberReactReduxWrapper";

function DisplayNumberRoot(props) {
    return (
        <div>
            <h1>Display Number Root</h1>
            {/* <DisplayNumberWrapper></DisplayNumberWrapper> */}
            <DisplayNumberReactReduxWrapper></DisplayNumberReactReduxWrapper>
        </div>
    )
}

export default DisplayNumberRoot;