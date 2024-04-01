// we have to combine all reducers and export it as a single reducer function.

import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
    amount:amountReducer,
})

export default reducers