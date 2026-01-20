import { useContext } from "react"
import { postsData } from "./postsContext"
import { useParams } from "react-router-dom"

export default function SinglePost(){

    const allPosts = useContext(postsData)

    const params = useParams()

    const thePost = allPosts.find((post) =>{
        return post.id === Number(params.postId) // we used Number cause useParams returns a string
    })

    if (thePost){
        return(
            <div>
                <h1>{thePost.title}</h1>
                <p>{thePost.details}</p>
            </div>
        )
    }else{
        return(
        <div>
            <h1>page with id {params.postId} not found</h1>

            <button onClick={() => window.history.back()}>back</button>
            
        </div>
    )
    }
}