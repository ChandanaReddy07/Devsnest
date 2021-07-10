
const CardScroll=(props)=>{
    return(
     
         <div className="cardsc">
             <img src="" alt="" />
             <div className="title">{props.title||"Card Title"}</div>
             <button>
                 download
             </button>
         </div>
      
    )
}

export default CardScroll