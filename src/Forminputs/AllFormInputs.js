import { useState } from "react";

export function AllFormInputs(){
    const inputsObject = {
        textarea: '',
        selectGroup: '',
        checkBox: '',
        radioBtn: ''
    }
    const [formInputs, setFormInputs] = useState(inputsObject)

    return(
        <form>
            {/* textarea  */}
            <textarea value={formInputs.textarea} onChange={(e) => {
                console.log(e)
                setFormInputs({...formInputs, textarea: e.target.value})
                }} />

            <br></br>

            {/* select group */}
            <label>choose </label>
            <select value={formInputs.selectGroup} onChange={(e) => {
                console.log(e.target.value)
                setFormInputs({...formInputs, selectGroup: e.target.value})
                }}>
                <option>one</option>
                <option>twoo</option>
                <option>three</option>
            </select>
            <br></br>

            {/* checkBox  */}
            <label>check box</label>
            <input type="checkBox" checked={formInputs.checkBox} onChange={(e) => {
                // here we used the checked prop not the value cause it holds the value we target
                setFormInputs({...formInputs, checkBox: e.target.checked})
                }} />
            <br></br>

            {/* radio btn */}
            {/* here we linked the radios with each other by accessing the same radiobtn property in the obj
            so, when it equals the value in the checked condition it will be mapped to true else to false */}
            <label>radio btn1</label>
            <input type="radio" checked={formInputs.radioBtn === 'one'} onChange={(e) => {
                setFormInputs({...formInputs, radioBtn: 'one'})
                }} />
            <label>radio btn2</label>
            <input type="radio" checked={formInputs.radioBtn === 'two'} onChange={(e) => {
                setFormInputs({...formInputs, radioBtn: 'two'})
                }} />
        </form>
    )
}