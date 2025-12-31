export default function ConRend(){
    let state = false;
    if (state){
        return(
            <>
                <h1 style={{backgroundColor:'blue'}}>Conditional Rendering</h1>
            </>
        );
    }else{
        return(
            < >
                <h1 style={{backgroundColor:'blueviolet'}}>Conditional Rendering</h1>
                <CompForRend body=''/>
            </>
        );
    }
}

// function CompForRend({body = 'default value'}){
//     if (body !== ''){
//         return(
//             
//         );
//     }else{
//         return(
//             <div>
//                 CompForRend cause body is empty
//             </div>
//         );
//     }
// }

function CompForRend({body = 'default value'}){
    return(
        <div>
            {body !== '' && body !== null ? <div>{body}</div> :
                <div><span style={{marginRight:'10px'}}>CompForRend cause body is empty</span>
                <ion-icon name="cellular-outline"></ion-icon>
                </div>}
        </div>
    );
}

// this is ternary operator
let title = null;
title ? console.log('title is true') : console.log('title is false');
// it will console the seconde statment
// condition ? if true : if false;

// if it is in JSX we write it in {} and {} is in <div/> which is in Return satement