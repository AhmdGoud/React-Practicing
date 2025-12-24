// import logo from './logo.svg';
// import './App.css';
// import MyFirstFileComp from './MyFirstFileComp.js'

import State from './State.js';
import Input from './Input.js';

function App() {
  return (
    <div className="App">
      <MyFirstComp />
      <State />
      <Input a='aa' b='bb'/>
    </div>
  );
}

function MyFirstComp(){
  return (
    <div>
      <h1 style={{color: 'green'}}>My First Component</h1>
      <h3>Great Work ..</h3>
    </div>
  );
}

export default App;

// {/* <Recap prop='property'/>
//       <Recap>
//         <div>those are children</div>
//       </Recap> */}
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <MyFirstFileComp />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>I'll try now, it's my first react app</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}