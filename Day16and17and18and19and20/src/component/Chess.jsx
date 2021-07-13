function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
  const list=range(1, 8);
  
  const R1=()=>{
    return(
      <div>
      {
          list.map((item)=>{
            return (
              <div className="card1"/>
            )
          }
          )
      }
    </div>
    )
   
  }
  const R2=()=>{
    return(
      <div>
      {
          list.map((item)=>{
            return (
              <div className="card2"/>
            )
          }
          )
      }
    </div>
    )
   
  }
  
  
  
  
  const Chess=()=>{
    return(
      <div className="chess">
        {
           list.map((item)=>{
             return (
               item%2===0?
               <R1/>:<R2/>
             )
           }
           )
        }
         
              
      </div>
    )
  }

  export default Chess