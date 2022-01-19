import React from 'react';
import s from './InputValue.module.css';
import Button from "../Button/Button";

type InputMaxPropsType = {

    stopValue: number
    IncreaseMaxCount: () => void
    ReduceMaxCount: () => void
    MaxValueChange:(e:number)=>void
    disabled:boolean
}

function InputMax(props: InputMaxPropsType) {
    const getValue = (e:string)=> {
        props.MaxValueChange(Number(e))
    }
    return (
        <div className={s.Input}>
            <button disabled={props.disabled} onClick={props.ReduceMaxCount} className={s.button}>-</button>
            <div >

                <input  disabled={props.disabled} onChange={(e)=>{getValue(e.currentTarget.value)}} value={props.stopValue} className={s.InputValue}/>

            </div>
            <button  disabled={props.disabled} onClick={props.IncreaseMaxCount} className={s.button}>+</button>

        </div>
    );
}

export default InputMax;
