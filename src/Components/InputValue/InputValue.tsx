import React from 'react';
import s from './InputValue.module.css';
import Button from "../Button/Button";
import InputMin from "./InputMin";
import InputMax from "./InputMax";

type InputValuePropsType = {
    startValue: number
    stopValue: number

}

function InputValue(props: InputValuePropsType) {

    return (
        <div className={s.Input}>
            {/*<button className={s.button}>+</button>*/}
            <div>
                {/*<InputMin startValue={props.startValue}/>*/}
                {/*<InputMax stopValue={props.stopValue}/>*/}
                {/*/!*<input className={s.InputValue}/>*!/*/}

            </div>
            {/*<button className={s.button}>-</button>*/}

        </div>
    );
}

export default InputValue;
