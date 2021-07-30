import { useDispatch, useSelector } from "react-redux";
import { doneItem, removeItem } from "../action";

const ListTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  return (
    <div>
      {todos.map((todo, index) => (
        <div>
          <button
            onClick={() => {
              dispatch(
                doneItem({ 
                  done: true,
                })
              );
            }}
          >
            done
          </button>
          <h5 style={{ display: "inline-block" }}>{todo.title}</h5>
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
