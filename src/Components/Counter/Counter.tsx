import React from 'react';
import s from './Counter.module.css';
import Button from "../Button/Button";

type CounterPropsType = {
    currentValue: number
    Incrimination: () => void
    Reset: () => void
    maxCount:number
    minCount:number
    disabled:boolean
    switchOnSettings:()=>void
}

function Counter(props: CounterPropsType) {
let counterClassName = props.currentValue === props.maxCount ? s.Max : s.Indicator

    return (
        <div className={s.Counter}>
            <div
                className={props.disabled ? s.Error : counterClassName}>
                { props.disabled ? "Please, press ResSet, correct Input and press SetValue" : props.currentValue}
            </div>
            <div className={s.Buttons}>
                <Button title="Inc"
                        currentValue={props.currentValue}
                        action={props.Incrimination}
                        maxCount={props.maxCount}
                        minCount={props.minCount}

                />
                <Button title="Reset"
                        currentValue={props.currentValue}
                        action={props.Reset}
                        maxCount={props.maxCount}
                        minCount={props.minCount}
                />
                <Button title="Settings" action={props.switchOnSettings}/>
            </div>
        </div>
    );
}

export default Counter;
