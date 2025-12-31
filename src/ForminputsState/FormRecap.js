import { useState } from "react";

export default function FormRecap(){
    // we declared an object here and passed it to the useState(object)
    const obj = {
        name: '',
        email: ''
    }
    const [value, setValue] = useState(obj)

    return(
        <form>
            <label>name</label>
            <input type="text" value={value.name} onChange={(e) => {
                    // it's wrong here to spread the obj , cause here every time on change it will create new ob
                    // form obj which has empty values
                    // and when updtaing name it will clear email and visa versa , cause it dosen't hold values
                    const ob = {...obj}
                    ob.name = e.target.value
                    setValue(ob)
                    
                }}/>
            <br></br>

            <label>email</label>
            <input type="text" value={value.email} onChange={(e) => {
                    // the right is 
                    // we spread the value 
                    const ob = {...value}
                    ob.email = e.target.value
                    setValue(ob)

                    // and more concios way is 
                    setValue({...value, email: e.target.value})
                }}/>
            <br></br>

            <button>submit</button>
        </form>
    )
}
