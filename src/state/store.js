import { applyMiddleware, legacy_createStore as createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk"; // helps in executing asynchronous functions
import reducers from "./reducers";

export const store = createStore(reducers, {}, applyMiddleware(thunk)); // takes reducers, initial state and middleware if required as arguments


// Now will give access for overall application to acces this store