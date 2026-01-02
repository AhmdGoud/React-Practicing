import { useState } from "react"
export let showPopUp , setShowPopUp
export let showPopUpFucnk

export default function PopUp(){
    
    [showPopUp , setShowPopUp] = useState(false)
    const style = {
        color: 'green',
        backgroundColor: 'white',
        display: showPopUp ? 'block' : 'none'
    }

    // it's better that the component that imported the state it's the one that updates it, to avoid side affects
    showPopUpFucnk = function(){
        setShowPopUp(true)
    }

    return(
        <div style={style}>
            <h2>Form is already submitted</h2>
        </div>
    )
}