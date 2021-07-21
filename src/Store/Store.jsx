import { combineReducers, createStore } from "redux";
import bodyReducer from "./bodyReducer";
import headReducer from "./headReducer";

const rootReducer = combineReducers({ headReducer, bodyReducer });

export const store = createStore(rootReducer);