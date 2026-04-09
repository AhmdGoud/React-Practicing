import "./App.css";
// import Counter from "./useReducer/counter";
// import { Print } from "./useReducer/counter";

import { Provider } from "react-redux";
import store from "./Redux/store";
// import Counter from "./Redux/counter";

import Main from "./reRun_reEvoluation/main";

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{ padding: "0 20px" }}>
        {/* <Counter />
      <Print /> */}

        {/* <Counter /> */}
        <Main />
      </div>
    </Provider>
  );
}

export default App;
