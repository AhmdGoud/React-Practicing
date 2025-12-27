import { useState } from "react";

export default function ArrayState(){

    const [inputValue, setInputValue] = useState('')
    const [arrValues, setArrValues] = useState(['one', 'two', 'three', 'four', 'five'])

    const arrListItems = arrValues.map((item, i) =>{
        return <li key={i}>{item}

        <button onClick={() => {
            // we used here another var as to link update with state cause we can't update state directly by mutation
            const newArr = [...arrValues]
            newArr.splice(i, 1)
            setArrValues(newArr)
        }}>del</button>

        <button onClick={() =>{
            const newArr = [...arrValues]
            newArr[i] = newArr[i] + '00'
            setArrValues(newArr)
        }}>edit</button>

        </li>
    })

    return(
        <div>
            {arrListItems}
            <input value={inputValue} onChange={(e) =>{
                setInputValue(e.target.value)
            }}/>
            <button onClick={() =>{
                setArrValues([...arrValues, inputValue])
                setInputValue('')
            }}>add</button>
        </div>
    )
}

// export default function ArrayState(){

//     const [inputValue, setInputValue] = useState('')
//     const [arrValues, setArrValues] = useState([
//         {id: 1, num: 'one'},
//         {id: 2, num: 'two'},
//     ])

//     const arrListItems = arrValues.map((item, i) =>{
//         return <li key={i}>{item}

//         <button onClick={() => {
//             // we used here another var as to link update with state cause we can't update state directly by mutation
//             const newArr = [...arrValues]
//             newArr.splice(i, 1)
//             setArrValues(newArr)
//         }}>del</button>

//         <button onClick={() =>{
//             setInputValue()
//         }}>edit</button>

//         </li>
//     })

//     return(
//         <div>
//             {arrListItems}
//             <input value={inputValue} onChange={(e) =>{
//                 setInputValue(e.target.value)
//             }}/>
//             <button onClick={() =>{
//                 setArrValues([...arrValues, inputValue])
//                 setInputValue('')
//             }}>add</button>
//         </div>
//     )
// }