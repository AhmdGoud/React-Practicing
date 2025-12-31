export default function TOremember(){
    const ulstyle = {
        backgroundColor: 'blue',
        fontSize: '22px'
    }
    return (
        <>
            <h1 style={{backgroundColor: 'red'}} className="theheader">To Remember React</h1>
            <ul style={ulstyle}>things i have to recheck
                <li>styling (is done)</li>
                <li>destruction props (is done)</li>
                <li>conditional rendring (is done)</li>
                <li>list rendring (is done)</li>
            </ul>
            <Forprops />
            <Listuls />
            <Propasjsx>
                <div>
                    <p>this is a JSX as a prop</p>
                </div>
            </Propasjsx>
        </>
    )
}

// JSX as a prop
function Propasjsx({children}){
    return(
        <div>
            {children}
        </div>
    )
}

// conditional rendring
function Forprops({prop}){
    const content = prop
    if (prop !== '' || prop === null){
        return(
            <div>
                {content}
            </div>
        )
    }else{
        return(
            <div>
                cause prop no sended
            </div>
        )
    }
}

// conditional rendring
// if (prop === 'green background'){
//         return(
//             <>
//                 <div style={{backgroundColor:"green"}}>
//                     {content}
//                 </div>
//             </>
//         )
//     }else{
//         return(
//             <>
//                 <div style={{backgroundColor:"yellow"}}>
//                     {content}
//                 </div>
//             </>
//         )
//     }

// list rendring
function Listuls(){
    const items = [
        'item one',
        'item two',
        'item three'
    ]
    const theitem = items.map((item, i) =>{
        return (<li key={i}>{item}</li>)
    })
    return(
        <ul>
            {theitem}
        </ul>
    )
}