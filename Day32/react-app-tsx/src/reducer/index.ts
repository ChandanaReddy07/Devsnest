import { combineReducers } from "redux";
import {todosReducer} from "./todo"


const rootReducer= combineReducers({
    notes:todosReducer
})
export type reducerType=ReturnType<typeof rootReducer>



export default rootReducer

