import React from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import {reducerType} from "./reducer";
import { useState } from 'react';
import { addNote,removeNote } from './action';

const App=()=>{
  const notes=useSelector((state: any) => state.notes)
  const dispatch=useDispatch();
  const [input ,setInput]=useState<string>("")

  return (
    <div className="App">
      <input type="text" value={input} onChange={(e)=>{
        setInput(e.target.value)
      }} />

      <button onClick={()=>{
        if(input){
          dispatch(addNote(input))
        }
        setInput("")
      }}>Add</button>

      <div className="notes">
        {notes.map((note:string,index:number)=>(
          <li key={index}>
            <h3>{note}</h3>
            <button onClick={()=>{
                dispatch(removeNote(index))
            }}>Delete</button>
          </li>
        ))}
      </div>
    </div>
  )
}

export default App;
