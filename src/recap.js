// this is a recap on react
// 1- event when click render list (not done) we need hooks 
// 2- prompt when input render on condition (done) it worked

export default function Recap(){
    const items = [
        'item one',
        'item two',
        'item three'
    ]

    let item ; // item will equal an array of objects cause map returns html elements
    item = items.map(function(itm, i){
        return(
            <div key={i}>{itm}</div>
        )
    })

    // here react render the JSX which is item
    return(
        <div>
            {item}
        </div>
    )
}
// somthing like this
/*
    ['item one', 'item two', 'item three']
        ↓ map()
    [<div>item one</div>, <div>item two</div>, <div>item three</div>]
        ↓ assign to variable
    item = [JSX, JSX, JSX]
        ↓ render in JSX
    <div>
    <div>item one</div>
    <div>item two</div>
    <div>item three</div>
    </div>
*/
