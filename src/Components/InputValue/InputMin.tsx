import React from 'react';
import s from './InputValue.module.css';
import Button from "../Button/Button";

type InputMinPropsType = {
    startValue: number
    IncreaseMinCount: () => void
    ReduceMinCount: () => void
    MinValueChange:(e:number)=>void
    disabled:boolean


}

function InputMin(props: InputMinPropsType) {
const getValue = (e:string)=> {
    props.MinValueChange(Number(e))
}
    return (
        <div className={s.Input}>
            <button disabled={props.disabled} onClick={props.ReduceMinCount} className={s.button}>-</button>
            <div >

                <input disabled={props.disabled} onChange={(e)=>{getValue(e.currentTarget.value)}} value={props.startValue} className={s.InputValue}/>

            </div>
            <button disabled={props.disabled} onClick={props.IncreaseMinCount} className={s.button}>+</button>

        </div>
    );
}

export default InputMin;
