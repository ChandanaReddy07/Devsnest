
import './App.css';

import React ,{useState,useEffect} from 'react';
import Templates from './components/template';
function App() {

  const [templates,setTemplates]=useState([]);
  const [meme,setMeme]=useState(null);

useEffect(()=>{
  fetch('https://api.imgflip.com/get_memes')
  .then(res=>res.json())
  .then(
    data=>{setTemplates(data.data.memes)
  }
  )
},[])




  return (
    <div className="App">
      <h2>meme generator</h2>
      {meme===null?<Templates templates={templates}/>:""}
    </div>
  );
}

export default App;
