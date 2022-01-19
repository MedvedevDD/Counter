import React, {useState} from 'react';
import './App.css';
import Counter from "./Components/Counter/Counter";
import Button from "./Components/Button/Button";
import Settings from "./Components/Settings/Settings";


function App() {
    const [minCount, setMinCount] = useState(0)
    const [maxCount, setMaxCount] = useState(minCount + 1)
    const [disabled, setDisabled] = useState(false)


    const [value, setValue] = useState(minCount)

    function Incrimination() {
        value < maxCount && setValue(value + 1)
    }

    function Reset() {
        setValue(minCount)
    }
function SetSettings() {

}
    function IncreaseMinCount() {
        setMinCount(minCount + 1)
        if (maxCount == minCount +1) {
            setMaxCount(maxCount + 1)
        }
    }

    function ReduceMinCount() {
        setMinCount(minCount - 1)
    }

    function IncreaseMaxCount() {
        setMaxCount(maxCount + 1)
    }

    function ReduceMaxCount() {
        setMaxCount(maxCount - 1)
    }
    function MinValueChange(e:number) {
        setMinCount(e)
    }
    function MaxValueChange(e:number) {
        setMaxCount(e)
    }

    return (
        <div className="Main">
            <div className="App">

                <Settings
                    startValue={minCount}
                    stopValue={maxCount}
                    IncreaseMinCount={IncreaseMinCount}
                    ReduceMinCount={ReduceMinCount}
                    IncreaseMaxCount={IncreaseMaxCount}
                    ReduceMaxCount={ReduceMaxCount}
                    SetSettings={SetSettings}
                    MinValueChange={MinValueChange}
                    MaxValueChange={MaxValueChange}
                />


                <Counter currentValue={value}
                         Incrimination={Incrimination}
                         Reset={Reset}
                         maxCount={maxCount}
                         minCount={minCount}
                />


                {/*<Button title="InputValue"*/}
                {/*        currentValue={value}*/}
                {/*        action={Reset}*/}
                {/*        maxCount={maxCount}*/}
                {/*        minCount={minCount}*/}
                {/*/>*/}
            </div>


        </div>
    );
}

export default App;
