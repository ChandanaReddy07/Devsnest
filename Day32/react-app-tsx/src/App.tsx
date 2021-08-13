import React from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import {reducerType} from "./reducers";
import { useState } from 'react';
// interface AppProps{
//   title:string;
//   descripton:string;
// }
// const App = ({title,descripton}: AppProps)=> {
//   return (
//     <div className="App">
//       <h1>{title}</h1>
//       <h2>{descripton}</h2>
//     </div>
//   );
// }

const App=()=>{
  const notes=useSelector((state: reducerType) => state.notes)
  const dispatch=useDispatch();
  const [input ,setInput]=useState<string>("")

  return (
    <div className="App">
      <input type="text" />
      <button>Add</button>
    </div>
  )
}

export default App;
