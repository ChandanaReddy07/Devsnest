const counterReducer=(state=0,action)=>{
    
    if(action.type==="INC_NUMBER"){
        console.log("press+")
        return state+1
    }
    else if(action.type==="DEC_NUMBER"){
        console.log("press-")
        return state-1
    
    }
    else{
        return state
    }
}

export default counterReducer