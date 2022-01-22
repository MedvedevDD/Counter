import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Components/Counter/Counter";
import Button from "./Components/Button/Button";
import Settings from "./Components/Settings/Settings";


function App() {
    const [minCount, setMinCount] = useState(0)
    const [maxCount, setMaxCount] = useState(minCount + 1)
    const [disabled, setDisabled] = useState(false)


    const [value, setValue] = useState(minCount)

    useEffect(() => {
        let valueString = localStorage.getItem('currentValue')
        if (valueString) {
            setValue(JSON.parse(valueString))
        }
        let minValueString = localStorage.getItem('currentMinValue')
        if (minValueString) {
            setMinCount(JSON.parse(minValueString))
        }
        let maxValueString = localStorage.getItem('currentMaxValue')
        if (maxValueString) {
            setMaxCount(JSON.parse(maxValueString))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('currentValue', JSON.stringify(value))
        localStorage.setItem('currentMinValue', JSON.stringify(minCount))
        localStorage.setItem('currentMaxValue', JSON.stringify(maxCount))
    }, [value, minCount, maxCount])

    function Incrimination() {
        value < maxCount && setValue(value + 1)

    }

    function Reset() {
        setValue(minCount)

    }

    function ResetSettings() {
        setMinCount(0)
        setMaxCount(1)
        setDisabled(false)
        localStorage.clear()
        setValue(0)
    }

    function SetSettings() {
        setValue(minCount)
        if (maxCount <= minCount) {
            setMaxCount(minCount + 1)
        }
    }
    //
    // function IncreaseMinCount() {
    //     maxCount <= minCount ? setDisabled(true) : setMinCount(minCount + 1)
    //     if (maxCount == minCount + 1) {
    //         setMaxCount(maxCount + 1)
    //         setDisabled(false)
    //     }
    // }
    //
    // function ReduceMinCount() {
    //     minCount > 0 ? setMinCount(minCount - 1) : setDisabled(true)
    // }
    //
    // function IncreaseMaxCount() {
    //     setMaxCount(maxCount + 1)
    // }
    //
    // function ReduceMaxCount() {
    //     maxCount > minCount + 1 ? setMaxCount(maxCount - 1) : setDisabled(true)
    // }

    function MinValueChange(e: number) {

        minCount <= -1 || maxCount <= minCount ? setDisabled(true) : setMinCount(e)
    }

    function MaxValueChange(e: number) {
        maxCount <= 0 || maxCount < minCount + 1 ? setDisabled(true) : setMaxCount(e)
        console.log(maxCount)
    }

    return (
        <div className="Main">
            <div className="App">
                <div className={"Settings"}>
                    <Settings
                        startValue={minCount}
                        stopValue={maxCount}
                        // IncreaseMinCount={IncreaseMinCount}
                        // ReduceMinCount={ReduceMinCount}
                        // IncreaseMaxCount={IncreaseMaxCount}
                        // ReduceMaxCount={ReduceMaxCount}
                        SetSettings={SetSettings}
                        MinValueChange={MinValueChange}
                        MaxValueChange={MaxValueChange}
                        ResetSettings={ResetSettings}
                        disabled={disabled}
                    />
                </div>

                <div className={"Counter"}>
                    <Counter currentValue={value}
                             Incrimination={Incrimination}
                             Reset={Reset}
                             maxCount={maxCount}
                             minCount={minCount}
                             disabled={disabled}
                    />
                </div>


            </div>
        </div>
    );
}

export default App;
