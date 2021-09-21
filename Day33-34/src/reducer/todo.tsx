interface deleteNoteAction {
    type: string;
    payload:number;
}
interface addNoteAction {
    type: string;
    payload:string;
}

type ActionType = addNoteAction | deleteNoteAction;

export const todosReducer=(state:string[]=[],action: ActionType)=>{

    switch(action.type){
        case "ADD_ITEM":
      
            return [...state,action.payload]
        
        case "REMOVE_ITEM" :
            return state.filter((_:string,index:number)=>index!==action.payload);
        default :
        return state;

        }
    }
  


