export default function ListRender(){
    const items = [
        'item one',
        'item two',
        'item three',
    ]
    const litems = items.map((item, i)=>{
        return (<li>{item}</li>)
    })
    return (
        <ul>from list rendering
            {litems}
        </ul>
    );
}

export function RenderList(){
    const posts = [
        {head:'head for post one', body:'body for post one'},
        {head:'head for post two', body:'body for post two'},
    ]
    const listPosts = posts.map((post, i) =>{
        return (
            <div key={i} style={{backgroundColor:"blueviolet"}}>
                <h1>{post.head}</h1>
                <h3>{post.body}</h3>
            </div>
        );
    })
    return(
        <>
            {listPosts}
        </>
    );
}