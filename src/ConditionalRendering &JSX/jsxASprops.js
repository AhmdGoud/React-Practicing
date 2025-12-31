import air from './airplane-outline.svg'
import bat from './battery-charging-outline.svg'
import ConRend from './ConditionalRendering'
import ListRender from './ListRender'

export default function JSX(){
    return (
        <div style={{border:'1px solid black', padding:'20px', margin:'100px', display:'flex', gap:'20px'}}>
            <div>
                <Articles>
                    <div style={{backgroundColor:'red', padding:'8px'}}>
                        <h1>children</h1>
                        <h3>finally it worked</h3>
                    </div>
                </Articles>
                <Articles>
                    <div style={{backgroundColor:'green', padding:'12px'}}>
                        <h1>another children</h1>
                        <h3>finally i did it</h3>
                    </div>
                </Articles>
            </div>

            <div>
                <Buttons>
                    <div style={{backgroundColor:"yellowgreen"}}>
                        <img src={air} alt="airplane"></img>
                        airplane
                    </div>
                </Buttons>
                <Buttons>
                    <button style={{backgroundColor:"tomato"}}>
                        <img src={bat} alt="airplane"></img>
                        airplane
                    </button>
                </Buttons>
            </div>

            <ConRend />
            <ListRender />
        </div>
    );
}

function Articles(props){
    return (
        <div>
            {props.children}
        </div>
    );
}

function Buttons({children}){
    return (
        <div>
            {children}
        </div>
    );
}