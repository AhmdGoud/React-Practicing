import './MyFirstFileComp.css'

const txt = 'text from var txt '
export default function MyFirstFileComp(){
    const hi = 'hello React JS'; // we can declare vars inside cause the function returns the HTML
    const pstyle = {
        color : 'red',
        fontSize : '40px'
    }
    return(
        <div>
            {hi}<br/> 
            {txt}<br/>
            <p style={pstyle}>This Component is from other JS file, it's separeted</p>
            <input type="text" className={"inpt"}  onClick={tst}></input>
            {/* {put(document.querySelector('.pt'))} */}
        </div>
    );
}

export function tst(){
    alert(' alert from tst');
}
