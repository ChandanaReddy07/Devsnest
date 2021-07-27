
const Templates=({templates,setMeme})=>{
    return (
        <div className="temps">
             {
        templates.map((temp)=>
          (
          <div key={temp.id} className="temp" onClick={()=>{
            setMeme(temp)
          }}>
            <div style={{backgroundImage:`url(${temp.url})`}} className='image'></div>
          </div>

        ))
      };
        </div>
       
    )
}

export default Templates;