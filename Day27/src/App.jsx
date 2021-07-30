import { useDispatch, useSelector } from "react-redux";
import './App.css'
import { incNumber, decNumber } from "./action";
import AddTodo from "./components/addTodo";
import ListTodo from "./components/todoList";


function App() {

   
  return(
    <div className="App">
    <h1>Todo List</h1>
    <AddTodo/>
    <ListTodo/>


</div>
  ) 
}
export default App;
