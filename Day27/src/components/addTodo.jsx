import React from 'react'
import { useState } from "react";
import { useDispatch } from 'react-redux';

import { addItem, removeItem } from "../action";
const  AddTodo=()=> {
    const [item,setItem]=useState({
        name:"",
        done:false
    });
    const dispatch = useDispatch()
    return (
        <div>
            <input type="text" 
            placeholder="Add a todo..."
            value={item.name}
            onChange={(e)=>{
                setItem({...item,name:e.target.value})
            }} />
            <button onClick={()=>{
                dispatch(addItem({
                    title:item,
                    // done:false,    
                }))
                setItem({...item,name:""})
            }}>Add</button>      
        </div>
    )
}

export default AddTodo
