import { useState } from "react";

// export default function MyForm(){
    
//     // const [nameValue, setNamevalue] = useState('')
//     // const [emailValue, setEmailvalue] = useState('')

//     // we won't declare a function and call it on click cause we have more than one state
//     // instead we will call the useState function on change with arrow function having event as parameter

//     return(
//         <form 
//             onSubmit = {(e) => {
//                 e.preventDefault()
//             }}>

//             <label>name</label>
//             <input type="text" value={nameValue} onChange={(e) => {setNamevalue(e.target.value)}}/>
//             <br></br>

//             <label>email</label>
//             <input type="email" value={emailValue} onChange={(e) => {setEmailvalue(e.target.value)}}/>
//             <br></br>

//             <button onClick = {() => {
//                         alert('submitted')
//                     }}>
//                 submit</button>
//         </form>
//     )
// }


export default function MyForm(){
    
    // we can pass any value to the state like arrays and objects
    const [formInputs, setFormInputs] = useState({name: '', email: ''}) // formInputs will equal the useState value 
    // which is an object 

    return(
        <form 
            onSubmit = {(e) => {
                e.preventDefault()
            }}>

            <label>name</label>
            
            <input type="text" value={formInputs.name} onChange={(e) => {
                    const newFormInputs = {...formInputs}
                    newFormInputs.name = e.target.value
                    setFormInputs(newFormInputs)

                    // or in one line this way
                    // setFormInputs({...formInputs, name: e.target.value})
                }}/>
            <br></br>

            <label>email</label>
            <input type="email" value={formInputs.email} onChange={(e) => {
                    const newFormInputs = {...formInputs}
                    newFormInputs.email = e.target.value
                    setFormInputs(newFormInputs)

                    // or in one line this way
                    // setFormInputs({...formInputs, email: e.target.value})
                }}/>
            <br></br>

            {/* // we won't declare a function and call it on click cause we have more than one state
            // instead we will call the useState function on change with arrow function having event as parameter */}
            
            
            <button onClick = {() => {
                        alert('submitted')
                    }}>
                submit</button>
        </form>
    )
}


// {/* in the set method setFormInputs({name: e.target.value}) this way
//              it will replace the formInputs obj by a new one just having the value passed which is{name: e.target.value} 
//              so we have to pass it and keep the email value And vice versa*/}

//             {/* so we can do so setFormInputs({name: e.target.value, email: formInputs.email})
//             but this will be too much when there are too inputs */}