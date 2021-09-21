const addNote=(item:string)=>{
    return {
        type:"ADD_ITEM",
        payload:item,
    }
}
const removeNote=(id:number)=>{
    return {
        type:"REMOVE_ITEM",
        payload: id,
    }
}
const doneItem=(id:number)=>{
    return {
        type:"DONE_ITEM",
        payload: id,
    }
}



export {addNote,removeNote,doneItem}