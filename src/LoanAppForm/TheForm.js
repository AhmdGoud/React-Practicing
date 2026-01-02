import { useState, useCallback } from "react";
import { useRef, useEffect } from "react";

import PopUp from "./PopUpTab";
import { setShowPopUp } from "./PopUpTab";

export default function TheForm(){
    // styling
    const formStyle = {
        backgroundColor: 'tomato',
        width: '300px',
        height: '200px',
        margin: '100px auto',
        padding: '10px 30px'
    }
    const divStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '5px 0'
    }

    // the form inputs array of objects
    const initialInputs = {
        name: {
            id: 0,
            value: ''
        },
        number: {
            id: 1,
            value: ''
        },
        age: {
            id: 2,
            value: ''
        },
        checkbox: {
            id: 3,
            value: ''
        },
    }

    // useState
    const [formInputs, setFormInputs] = useState(initialInputs)

    function updateValues(event, element){
        const objToUpdate = {...formInputs}
        // we used bracket notation cause it looks for the value of the variable,
        // unlike dot notation which looks for a property with the same name
        objToUpdate[element].value = event.target.value
        setFormInputs(objToUpdate)
    }

    const entries = Object.entries(formInputs) // array of arrays , each one have 2 indexs
    // the key as a string , and an object holding the values

    const submitBtnRef = useRef(null)
    const fieldChecknRef = useRef(null)

    const changeBtnColor = useCallback(() =>{
        for (let entry of entries){
            if (!entry[1].value){
                return;
            }
        }
        submitBtnRef.current.style.backgroundColor = 'skyblue'
    }, [entries])

    useEffect(() =>{
        changeBtnColor();
    }, [formInputs, changeBtnColor])

    // test age and number is numbers not letters
    function testNum(e){
        if (/[a-zA-Z]/.test(e.target.value)){
            fieldChecknRef.current.style.display = 'block'
        }else{
            fieldChecknRef.current.style.display = 'none'
        }
    }

    return(
        <form style={formStyle}>

            <div style={divStyle}>
                <label>name</label>
                <input type="text" value={formInputs.name.value} onChange={(e) =>{
                    updateValues(e, "name")
                }}/>
            </div>
            <div style={divStyle}>
                <label>number</label>
                <input type="text" value={formInputs.number.value} onChange={(e) =>{
                    updateValues(e, "number")
                    testNum(e)
                }}/>
            </div>
            <div style={divStyle}>
                <label>age</label>
                <input type="text" value={formInputs.age.value} onChange={(e) =>{
                    updateValues(e, "age")
                    testNum(e)
                }}/>
            </div>

            <label style={{marginRight: '10px'}}>are u an employee</label>
            <input type="checkbox" checked={formInputs.checkbox.value} onChange={(e) =>{
                const objToUpdate = {...formInputs}
                objToUpdate.checkbox.value = e.target.checked
                setFormInputs(objToUpdate)
            }}/><br></br>

            {/* <select>
                <option>select salary range</option>
                <option>from 1000 to 3000</option>
                <option>from 3000 to 5000</option>
                <option>from 5000 to 10000</option>
            </select><br></br> */}

            <button ref={submitBtnRef} onClick={(e) =>{

                const entries = Object.values(formInputs);
                for (let val of entries){
                    if (!val.value){
                        e.preventDefault()
                        return;
                    }
                    setShowPopUp(true)
                }

                if (formInputs.age.value <= 18 || formInputs.number.value.length !== 12){
                    e.preventDefault()
                }

            }}>submit form</button>

            <div ref={fieldChecknRef} style={{
                color: 'red',
                backgroundColor: 'white',
                width: '100%',
                textAlign: 'center',
                display: 'none'
            }}>field must be in numbers</div>

            <PopUp />
        </form>
    )
}

// some notes
// Object.entries(formInputs).forEach(([key, values]) =>{ // bracket notation
    // as we destructure them for the entries
// Object.entries return an array of key and value
// return; keyword just stops the single excuation in the foreach