const todoReducer=(state=[],action)=>{
    
    if(action.type==="ADD_ITEM"){
      
        return [...state,action.payload]
    }
    else if(action.type==="REMOVE_ITEM"){ 
        return state.filter((item,index)=>index!==action.payload);
    }
  
    else if(action.type==="DONE_ITEM"){ 
        return state.map((item,index)=>{if(index!==action.payload)
            item.done=true;
        console.log("index",index,item.done)}
        );
    }
  
    else{
        return state
    }
}

export default todoReducer