import './App.css';
import Card from './component/Card';
import CardScroll from './component/CardScroll';
import Chess from './component/Chess';
import But from './component/form';
//import React, {useStates} from 'react';


const items = [
  {
    title:'Pizza',
    cal:30
  },
  {
    title:'Burger',
    cal:69
  },
  {
    title:'Coke',
    cal:500
  },
  {
    title:'Browne',
    cal:180
  },
  {
    title:'Fried Rice',
    cal:200
  },
  {
    title:'Lassania',
    cal:600
  },
  {
    title:'Pani Puri',
    cal:10
  }
]


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
     
        <CardScroll item={items} />
    
      </div>
       <But/>

      </div>
    )
}

export default App;
