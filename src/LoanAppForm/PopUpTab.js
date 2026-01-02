import { useState } from "react"
export let showPopUp , setShowPopUp

export default function PopUp(){
    
    [showPopUp , setShowPopUp] = useState(false)
    const style = {
        color: 'green',
        backgroundColor: 'white',
        display: showPopUp ? 'block' : 'none'
    }

    return(
        <div style={style}>
            <h2>Form is already submitted</h2>
        </div>
    )
}