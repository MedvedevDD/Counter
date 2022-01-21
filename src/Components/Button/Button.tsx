import React from 'react';
import s from './Button.module.css';

type CounterValue = {
    title: string
    currentValue?: number
    action: () => void
    maxCount?: number
    minCount?:number
    disabled?: boolean


}


function Button(props: CounterValue) {
    let myDisabled;
    if (props.currentValue === props.maxCount && props.title === 'Inc') {
        myDisabled = true
    }
    if (props.currentValue === props.minCount && props.title === 'Reset') {
        myDisabled = true
    }


    return (
        <div>

            <div className={s.buttonBox}>
                <button className={`${s.button} ${props.disabled ? s.disabled : ""} `} disabled={myDisabled || props.disabled}
                        // className={isIncDisabled ? s.buttonRed : s.buttonGreen}
                        onClick={() => {
                            props.action()
                        }}
                >{props.title}
                </button>

            </div>
        </div>
    );
}
//className={`${s.button} ${props.disabled ? s.disabled : ""} `}
export default Button;
