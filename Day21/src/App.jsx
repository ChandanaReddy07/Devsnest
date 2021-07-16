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
        (
        <div className="empty">
        <h2>Add Food Items</h2>
        <div className="image1">
        <img src="https://cdn4.vectorstock.com/i/1000x1000/85/68/black-and-white-empty-pet-food-bowl-silhouette-vector-21138568.jpg" alt="" />
        </div>
        </div>
          ):
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
