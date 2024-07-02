import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      desc: "hello todo again@!",
      createdAt: Date.now(),
    },
  ],
};

// state : current state for variable
// action : passed values to us
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        desc: action.payload,
      };
      state.todos.unshift(todo);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    updateTodo: (state, action) => {
      const id = action.payload.id;
      state.todos.map((todo) =>
        todo.id === id ? (todo.desc = action.payload.desc) : todo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
