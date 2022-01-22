import React from 'react';
import s from './Settings.module.css';
import Button from "../Button/Button";
import InputValue from "../InputValue/InputValue";
import InputMin from "../InputValue/InputMin";
import InputMax from "../InputValue/InputMax";

type SettingsPropsType = {
    startValue: number
    stopValue: number
    // IncreaseMinCount: () => void
    // ReduceMinCount: () => void
    // IncreaseMaxCount: () => void
    // ReduceMaxCount: () => void
    SetSettings: () => void
    MinValueChange: (e: number) => void
    MaxValueChange: (e: number) => void
    ResetSettings: () => void
    disabled: boolean

}

function Settings(props: SettingsPropsType) {

    return (
        <div className={s.Settings}>

            <div className={s.Input}>
                <div>Settings</div>
                {/*<InputValue startValue={props.startValue} stopValue={props.stopValue}/>*/}
                <InputMin
                    // IncreaseMinCount={props.IncreaseMinCount}
                    // ReduceMinCount={props.ReduceMinCount}
                    startValue={props.startValue}
                    MinValueChange={props.MinValueChange}
                    disabled={props.disabled}

                />
                <InputMax
                    // IncreaseMaxCount={props.IncreaseMaxCount}
                    // ReduceMaxCount={props.ReduceMaxCount}
                    stopValue={props.stopValue}
                    MaxValueChange={props.MaxValueChange}
                    disabled={props.disabled}
                />
            </div>
            <div className={s.Buttons}>
                <Button title="SetValue"
                        action={props.SetSettings}
                        disabled={props.disabled}
                />
                <div className={props.disabled ? s.disabled : ""}>
                    <Button title="ResSet"
                            action={props.ResetSettings}
                    />
                </div>
            </div>
        </div>
    );
}

export default Settings;
