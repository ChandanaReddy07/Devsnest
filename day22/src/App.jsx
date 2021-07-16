
import './App.css';
import React ,{useState,useEffect} from 'react';
import Templates from './components/template';
import Meme from './components/Meme';

function App() {

  const [templates,setTemplates]=useState([]);
  const [meme,setMeme]=useState(null);
  
useEffect(()=>{
  fetch('https://api.imgflip.com/get_memes')
  .then(res=>res.json())
  .then(
    data=>
    {setTemplates(data.data.memes)
    }
  )
},[])
  return (
    <div className="App">
      <h2>meme generator</h2>
      {meme===null?<Templates templates={templates} setMeme={setMeme}/>:<Meme meme={meme} setMeme={setMeme}/>}
    </div>
  );
}
export default App;
