import "./App.css";

import { Provider } from "react-redux";
import store from "./Redux/store";

import Count from "./MyOwnUseState/count";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Count />
      </div>
    </Provider>
  );
}

export default App;
