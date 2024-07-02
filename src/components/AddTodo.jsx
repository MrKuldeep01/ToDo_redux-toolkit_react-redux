import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../featurs/todo/todoSlice";

const AddTodo = () => {

  const [text, setText] = useState("");
  const dispatch = useDispatch();
  // dispatch : reducer ka use kr k store me change krta he
  const addTodoHandler = (e) => {
    e.preventDefault();
    if(text == ''){
      alert('please fill the description, to move further!')
    }
    else{
      dispatch(addTodo(text))
      setText("")
    }
  };
  return (
    <form onSubmit={addTodoHandler} className="flex-col w-full h-[25vh] flex justify-center items-start relative border-slate-700/10 border-2 rounded gap-4">
      <textarea 
        type="text"
        className="w-full p-2 bg-white/30 h-full
        outline-gray-400 resize-none font-extralight"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="description for your todo"

      />
      <button type="submit" className="absolute bottom-1 right-1 px-2 py-1 bg-blue-500 text-lg text-white outline-2 outline-slate-600 rounded">Submit</button>
    </form>
  );
};

export default AddTodo;
