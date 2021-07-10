import './App.css';
import Card from './component/Card';
import CardScroll from './component/CardScroll';
//import Chess from './component/Chess';

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

function App() {
    // return(
    //     <div className="App">
    //      <Card/>
          
    //     </div>
    //   )
    return(
      <div className="App">
      <Card/>
      <Chess/>
      <div className="container">
      <CardScroll title="Pizza" des="i love pizza 3/5" />
      <CardScroll title="golgappa" des="in love with golgappa 4/5"/>
      <CardScroll title="paneer ticka" des="in love with golgappa 3/5"/>
      <CardScroll title="burgur" des="i love golgappa 2/5"/>
      <CardScroll title="chicken" des="in love with golgappa 4/5"/>
     
      
      </div>
      </div>
    )
}

export default App;
