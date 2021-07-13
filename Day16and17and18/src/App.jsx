import './App.css';
import Card from './component/Card';
import CardScroll from './component/CardScroll';
import Chess from './component/Chess';
import But from './component/form';



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
       <But/>

      </div>
    )
}

export default App;
