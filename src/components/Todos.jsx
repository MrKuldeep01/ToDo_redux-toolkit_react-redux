import { useSelector, useDispatch } from "react-redux";
import { removeTodo} from "../featurs/todo/todoSlice";

const Todos = () => {
  // useSelector have access of state by default
  const todoArray = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="ListingTodo min-h-[70vh] w-full flex-col justify-center item-center gap-3 bg-slate-700/30 my-4 p-3 rounded-sm">
      <ul>
        {todoArray.map((todo) => (
          <li
            key={todo.id}
            className="px-3 py-2 my-2 w-full rounded bg-slate-700/60 text-white sm:flex justify-between item-center relative"
          >
            <span className="text-lg font-semibold max-w-1/2 h-auto">
              {todo.desc}
            </span>

            <button
            title="Delete task"
              className="bg-red-600/80 text-white py-1 px-2 rounded "
              onClick={() => {
                dispatch(removeTodo(todo.id));
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
