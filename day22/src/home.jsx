import React,{useState,useEffect} from "react";
import "./App.css";
import { Link } from 'react-router-dom';
const Home = () => {
 
    //  var imgs=document.querySelector(".images")
    const [memes,setMemes]=useState([]);

    useEffect(() => {
        fetch('https://meme-api.herokuapp.com/gimme/8')
        .then(res=> res.json())
        .then( data =>{
            setMemes(data.memes);
        }
        )
      }, []);
     

    
const goBack= () =>(
  <div>
      <Link className ="but" to="/create">Admin Home</Link>
  </div>
);
        

  return (
    <div className="contain">
      <h2 className="text">Create Memes</h2>

      <button className="but"
       onClick={
          ()=>{
            window.location.reload();
          }
      }
      >
        Generate

      </button>

      {/* <button className="but"
       onClick={
        goBack()
      }
      >
        Create
      </button> */}
      
      {goBack()}
     

      <div className="canvas1">
        <div className="images">
        {
             memes.map((element,index)=>(           
              <div className="image1" style={{backgroundImage:`url(${element.url})`}} ></div>       
             ) )
        } 
   
        </div>
      </div>
    </div>
  );
};

export default Home;
