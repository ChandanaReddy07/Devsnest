
import { useDispatch ,useSelector } from 'react-redux';


import {incNumber,decNumber} from "./action"




function App() {
    const count=useSelector((state)=>state.counter)
    const dispatch=useDispatch()
    return(
        <div className="App">
      <h1>
          counter using react redux
      </h1>
      <button onClick={
          ()=>{dispatch(incNumber())}
      }>
          +

      </button>
      <span>
          {count}
      </span>
      <button onClick={
          ()=>{dispatch(decNumber())}
      }>
          -

      </button>


  </div>
    )
  
}
export default App
