import React, {useState} from "react";

const Todo=({todo,todos,setTodos,index})=>{
    return (
        <div>
            <h2 className="todo">{todo}</h2>
            <button onClick={
                ()=>{
                    console.log("Delete =" , todo)
                    const newTodos= todos.filter((el,i )=>i!=index)
                    setTodos(newTodos)
                }
            }>delete</button>
        </div>
    )
}
const But = ()=>{
  // const [count,setCount]=useState(1)
    //let num=0;
    const [todos,setTodos]=useState([])
    const [value,setValue]= useState("");
 // console.log("count"+ count)
    return (
        <div className="but">
            {/* <button onClick={
                ()=>{
                    console.log("button on")
                  //  num+=1   
                setCount(count+1)        
                }
            }>helo{count}</button> */}


            {/* //todo */}
            <input type="text"  onChange={(e)=>{
                console.log(e.target.value)
                   setValue(e.target.value)

                // 
              
            }}
            value={value}/>
            <button onClick={()=>{
                setTodos([...todos,value])
                 setValue("")
    

            }}
            >Add</button>
          
            {
            todos.map((todo,index)=>(
                <Todo key={index} todo={todo} todos={todos} setTodos={setTodos} index={index}/>
            ))
           }
         
          
        </div>
    )

}

export default But;