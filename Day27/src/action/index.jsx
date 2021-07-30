const addItem=(item)=>{
    return {
        type:"ADD_ITEM",
        payload:item,
    }
}
const removeItem=(id)=>{
    return {
        type:"REMOVE_ITEM",
        payload: id,
    }
}
const doneItem=(id)=>{
    return {
        type:"DONE_ITEM",
        payload:id,
    }
}

export {addItem,removeItem,doneItem}