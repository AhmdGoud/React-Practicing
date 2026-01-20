import { Outlet, Link } from "react-router-dom";

export default function Prefix(){
    return(
        <>
            <Link to="/prefix/posts">
                <div>show links</div>
            </Link>
            <Outlet />
        </>
    )
}