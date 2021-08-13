import { useDispatch, useSelector } from "react-redux";
import './App.css'
import AddTodo from "./components/addTodo";
import ListTodo from "./components/todoList";


function App() {
  return(
    <div className="App">
    <h1>Todo List   Ganesh reddy</h1>
     <AddTodo/>
    <ListTodo/> 
   </div>
  ) 
}
export default App;
