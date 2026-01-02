import { Child } from "./Consumer"
import { theContext } from "./Context"

export function Parent(){
    return(
        <>
        <theContext.Provider value={{name: 'Ahmed Abdel-Rahmna', email: 'gouda@gmail'}}>
            <Child />
        </theContext.Provider>
        </>
    )
}