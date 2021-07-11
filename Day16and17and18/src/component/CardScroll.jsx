
const CardScroll=(props)=>{
    return(
     
         <div className="cardsc">
             <img src="" alt="" />
             <div className="title">{props.title||"Card Title"}</div>
             <h2 className="des">{props.des}</h2>
            
         </div>
      
    )
}

export default CardScroll