import React ,{useState} from 'react';
import './App.css';
import Card from './components/card';
import Form1 from './components/form';

function App() {
  const [value,setValue]=useState({
    title:"",
    cal:""
  })
  

  const [values,setValues]=useState([])

  const handleChange=(name)=>(e)=>{

    setValue({...value,[name]:e.target.value});
  
  }
  const handleChange1=()=>{

    setValues([...values,value]);
    console.log(values)
    setValue({...value,
                 title: "",
                 cal:"",
       })
  }

  return (
    <div className="App">
      <div className="container">
      <Form1 handleChange1={handleChange1} handleChange={handleChange} value={value} />

      <div className="cards">
      {
        values.length===0?
        (<h2>empty food</h2>):
        values.map((value,index)=>{

          return(
            <Card key={index} handleChange1={handleChange1} handleChange={handleChange} value={value} setValue={setValue} values={values} setValues={setValues} index={index}/>
          )
        })
      }
      </div>
      </div>
     
    </div>
  );


}

export default App;
