import { Link } from "react-router-dom"
import { useContext } from "react"
import { postsData } from "./postsContext"


export default function Posts(){

    const posts = useContext(postsData)

    const postsList = posts.map((post) =>{
        return(
            <Link to={`/prefix//${post.id}`} key={post.id}>
                <div>
                    <h1>{post.title}</h1>
                </div>
            </Link>
        )
    })

    return(
        <>
            {postsList}
        </>
    )
}