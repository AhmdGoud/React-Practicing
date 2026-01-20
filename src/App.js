// import './App.css';
// import logo from './logo.svg';
import { Route, Routes, Link } from "react-router-dom";
import Posts from "./ReactRouter/posts"
import { postsData } from "./ReactRouter/postsContext";
import SinglePost from "./ReactRouter/singlePost";
import NFpage from "./ReactRouter/NFpage";
import Prefix from "./ReactRouter/prefixPosts";

let thePosts = [
    {
        id: 1,
        title: 'first post',
        details: "sdad fdsf fg gfgfd hdfhg hjgfjj df dsf ysdas"
    },
    {
        id: 2,
        title: 'seconed post',
        details: "sdad fdsf fg gfgff d fdd hdfhg hjgftyr jg gfggj df dsf ysdas"
    },
    {
        id: 3,
        title: 'third post',
        details: "sdad fdsf fg gfgfd uuhdfhg hjgf gdfgffhjj dhg 4treytu tuf yt ydsf ysdas"
    },
]

function App() {

  return (
    <postsData.Provider value={thePosts}>
      <div className="App" style={{padding: '0 20px'}}>

        <ul>
          <Link to={"/home"}>
            <li>go to home</li>
          </Link>

          <Link to={"/hello"}>
            <li>go to hello</li>
          </Link>

          <Link to={"/prefix"}>
            <li>go to posts</li>
          </Link>
        </ul>

        <Routes>
          <Route path="/home" element={<h1>home page</h1>}/>
          <Route path="/hello" element={<HelloWorld />}/>
          
          <Route path="/prefix" element={<Prefix />}>

            <Route path="posts" element={<Posts />}/>
            <Route path=":postId" element={<SinglePost />}/>
            
          </Route>

          <Route path="*" element={<NFpage />}/>
        </Routes>      

      </div>
    </postsData.Provider>
  );
}

function HelloWorld(){
  return(
    <>
      <h1>hello world</h1>
    </>
  )
}

export default App;