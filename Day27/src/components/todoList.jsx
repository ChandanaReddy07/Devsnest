import { useDispatch, useSelector } from "react-redux";
import { doneItem, removeItem } from "../action";

const ListTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  return (
    <div>
      {todos.map((todo, index) => (
        <div>
         {/* <input type="checkbox"/> */}
         <button
            onClick={() => {
              dispatch(doneItem(index));
            }}
          >
            xx
          </button>
         {
           !todo.title.done?

          <h5 style={{ display: "inline-block" }}>{todo.title.name}</h5>:"heyy"


         }
          <button
            onClick={() => {
              dispatch(removeItem(index));
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListTodo;
