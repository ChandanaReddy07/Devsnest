import React, {useState} from 'react';


function CardScroll({item}){
    const [items,setItems]=useState(item)

    console.log("items"+items)
    
    return(
       <div>
            { 
           items.map((item,index)=>{
            return(
                <div className="cardsc">
                <img src="" alt="" />
                <div className="title">{item.title||"Card Title"}</div>
                <h2 className="des">{item.cal}</h2>
                <button onClick={()=>{
                    const newItem=items.filter((e,i) => i !== index);
							setItems(newItem);
   
                }}>delete</button>
               
            </div>



            )
        })
    }
       </div>
      
     
       
      
    )
}

export default CardScroll