import { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {  

  return <div className=" p-2 flex-col gap-2 justify-center items-center">
  <h1 className="my-4 bg-black text-white font-bold py-2 px-4 rounded-r-lg text-center text-3xl inline-block "> Todo Manager !</h1>
  <AddTodo/>
  <Todos/>
  </div>;
}

export default App;
