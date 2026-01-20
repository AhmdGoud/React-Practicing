import { Link } from "react-router-dom";

export default function NFpage(){
    return(
        <div>
            <h1>404</h1>
            <h3>page not found</h3>

            <Link to="/home">
                <button>back home</button>
            </Link>
        </div>
    )
}