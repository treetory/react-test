/*
    UI 컴포넌트인 DisplayNumber 를 wrapping 하는 Wrapper 를 생성
    해당 Wrapper 내에 store 를 통해 state 를 제어하는 코드를 작성하여
    UI 컴포넌트가 로직 의존성에서 벗어나도록 구성한다

    props 로 state 가 변화된 값을 전달
    -> DisplayNumber 전달받은 props 의 value 를 표기한다.

    아래는 state 의 변화를 감지하여 DisplayNumber 에 갱신이 일어나도록 하기 위해
    useEffect 를 통해 store 를 subscribe 하여 store 의 state 에 변화가 일어나면
    실행될 callback 을 등록한다

    등록된 callback 은 store 의 number state 에 변화가 일어나면, Wrapper 내부의
    state 를 변화시켜, DisplayNumber 에 props 로 전달하여 UI 갱신이 일어난다.
*/
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