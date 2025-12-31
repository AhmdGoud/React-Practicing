import { useState, useCallback } from "react";
import { useRef, useEffect } from "react";

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

    // function changeBtnColor(){
    //     for (let entry of entries){
    //         if (!entry[1].value){
    //             return;
    //         }
    //     }
    //     submitBtnRef.current.style.backgroundColor = 'skyblue'
    // } but using callBack
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
                }}/>
            </div>
            <div style={divStyle}>
                <label>age</label>
                <input type="text" value={formInputs.age.value} onChange={(e) =>{
                    updateValues(e, "age")
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
                // entries return an array of key and value
                Object.entries(formInputs).forEach(([key, values]) =>{ // bracket notation
                    // as we destructure them for the entries
                    if (!values.value){
                        e.preventDefault()
                    }
                    // return keyword just stops the single excuation in the foreach
                })
            }}>submit form</button>

        </form>
    )
}
