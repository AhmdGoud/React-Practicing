// this is a recap on react
// 1- event when click render list (not done) we need hooks 
// 2- prompt when input render on condition (done) it worked

export default function Recap(props){
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
    
    if (props.prop === undefined){ //When a prop isn't passed to a component at all, it defaults to undefined, not null:
        return(
            <div>no prop is there</div>
        )
    }
    // or we can check by this
    // Best practice: handle both cases if needed
    if (props.prop == null) {  // Checks both undefined AND null
    return <div>no prop is there</div>;
    }

    // here react render the JSX which is item
    return(
        <div>
            {item}
            {props.prop}
            {props.children}
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
