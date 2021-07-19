/*
    Redux 는 props 로 쭉 내렸는데... Mobx 에서는 이게 의미없음
    Provider 로 전역화 해버리기 때문에 사용하는 Component 에서
    store 를 직접 불러와서 쓰면 됨.
*/
import React, { useEffect, useState } from "react";
import DisplayNumber from "../components/DisplayNumber";

function DisplayNumberWrapper(props) {
    return (
        <div>
            <DisplayNumber number={1}></DisplayNumber>
        </div>
    )
}

export default DisplayNumberWrapper;