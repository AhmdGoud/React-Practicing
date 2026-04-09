import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";
import apiReducer from "./apiSlice";

const store = configureStore({
  // reducer => pointer to redux here are all reducers that manage state
  reducer: {
    // here can be more than one reducer
    counter: counterReducer,
    apiData: apiReducer,
    // counter => is the key
    // counterReducer => is the reducer function
  },
});

export default store;

// Redux uses the key (counter) to build the state structure.
// If your slice has:

// initialState = {
//   value: 0
// }

// Then the global state becomes:

// store
// {
//   counter: {
//     value: 0
//   }
// }
