import { useContext } from "react"
import { theContext } from "./Context"

export function Child(){
    const theData = useContext(theContext)
    return(
        <>
            <h1>{theData.name}</h1>
            <h2>{theData.email}</h2>
            <h3>{theData.age ? theData.age : 'no age mentioned'}</h3>
        </>
    )
}