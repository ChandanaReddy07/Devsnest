// import rootReducer from "./reducers";

// import { createStore } from "redux";

// const store =createStore(rootReducer)
// export default store

import { createStore } from 'redux';
import rootReducer from './reducers';

const store=createStore(rootReducer)

export default store