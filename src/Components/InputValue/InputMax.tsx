import React from 'react';
import s from './InputValue.module.css';
import Button from "../Button/Button";

type InputMaxPropsType = {

    stopValue: number
    IncreaseMaxCount: () => void
    ReduceMaxCount: () => void
}

function InputMax(props: InputMaxPropsType) {

    return (
        <div className={s.Input}>
            <button onClick={props.ReduceMaxCount} className={s.button}>-</button>
            <div >

                <input value={props.stopValue} className={s.InputValue}/>

            </div>
            <button onClick={props.IncreaseMaxCount} className={s.button}>+</button>

        </div>
    );
}

export default InputMax;
