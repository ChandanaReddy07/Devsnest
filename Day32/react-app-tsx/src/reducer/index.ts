import { combineReducers } from "redux";
import todoReducer from "./todo";


const rootReducer= combineReducers({
    notes:todoReducer
})
export type reducerType=ReturnType<typeof rootReducer>



export default rootReducer

