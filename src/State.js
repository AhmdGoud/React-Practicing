// first we import useState from react
import { useState } from "react";

export default function State(){

    // then we call useState('default value'), it logs an array of 2 items , first one is the value
    // seconed one is the function that updates this value

    const theState = useState('default value')
    const value = theState[0]; // the value 
    const setValue = theState[1]; // the function
    // or by destructing 
    // const [value, setValue] = theState

    // this function will be called on some action
    const checkValue = function(){
        if (value === 'default value'){
            console.log('rendered')
            setValue('btn clicked')
        }else{
            console.log('rendered')
            setValue('default value')
        }
    }
    
    // check value then redner regarding it
    
    return(
        <>
            {/* we can't pass the stateFunction('btn clicked') this way cause it will be called immdiatlley
            and react won't render it, it will show an error */}
            <button onClick={checkValue}>
                {/* here we pass the value the will be sets */} {value}
            </button>
        </>
    )
}