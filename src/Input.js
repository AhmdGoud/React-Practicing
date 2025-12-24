// importing state
import { useState } from "react";

export default function Input(props){

    // destructing state
    const [inputValue, setInputValue]  = useState('') // here we called useState with empty value
    // cause it will update it to the inputValue so our input will be empty not having any values till user input
    
    // here is the function that will be called on (event) happens which is input, 
    function change(event){
        // (event.target.value) it contains the input value and it updates on every input
        // so we pass it to the setInputValue function to update the inputValue which is passed on our JSX
        setInputValue(event.target.value)
    }

    return(
        <>
            <label>label</label>
            {/* the value attr contains the value on the input */}
            <input type="text" onInput={change} value={inputValue}/>
        </>
    )
}